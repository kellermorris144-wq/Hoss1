import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

// Whitelist of allowed origins (no trailing slashes)
const allowedOrigins = [
  'http://localhost:3000',
  'https://hoss1.vercel.app',
];

// Helper to generate the correct CORS headers for a given request
function getCorsHeaders(requestOrigin: string | null) {
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Origin": "" // Default to not allowed
  };

  // If the request origin is in our whitelist, reflect it in the response
  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    headers["Access-Control-Allow-Origin"] = requestOrigin;
  }
  
  return headers;
}

// Helper to create structured JSON responses
function jsonResponse(status: number, body: object, corsHeaders: HeadersInit) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

serve(async (req: Request) => {
  const requestOrigin = req.headers.get("Origin");
  const corsHeaders = getCorsHeaders(requestOrigin);

  // 1. Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // 2. Block requests from non-allowed origins
  if (!corsHeaders["Access-Control-Allow-Origin"]) {
    return jsonResponse(403, { error: "Forbidden: Origin not allowed" }, corsHeaders);
  }

  // 3. Ensure the method is POST
  if (req.method !== "POST") {
    return jsonResponse(405, { error: "Method Not Allowed" }, corsHeaders);
  }

  try {
    // 4. Check for required environment variables (set as Supabase secrets)
    const requiredSecrets = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD"];
    for (const secret of requiredSecrets) {
      if (!Deno.env.get(secret)) {
        console.error(`Server configuration error: Missing required secret '${secret}'`);
        return jsonResponse(500, { error: "Server configuration error" }, corsHeaders);
      }
    }

    // 5. Parse request body and determine form type
    const { formType, ...formData } = await req.json();
    let subject = '';
    let emailBody = '';

    if (formType === 'demo') {
      subject = 'New Demo Request from HOSS Website';
      emailBody = `A new demo has been requested:\n\n` +
             `Name: ${formData.firstName} ${formData.lastName}\n` +
             `Email: ${formData.email}\n` +
             `Phone: ${formData.phone}\n` +
             `Company: ${formData.company}\n` +
             `Industry: ${formData.industry}\n` +
             `Fleet Size: ${formData.fleetSize}\n` +
             `Preferred Date: ${formData.preferredDate || 'N/A'}\n` +
             `Preferred Time: ${formData.preferredTime || 'N/A'}\n` +
             `Challenges: ${formData.challenges || 'N/A'}\n`;
    } else if (formType === 'contact') {
      subject = `New Contact Form Submission: ${formData.subject}`;
      emailBody = `New message from contact form:\n\n` +
             `Name: ${formData.name}\n` +
             `Email: ${formData.email}\n` +
             `Phone: ${formData.phone || 'N/A'}\n` +
             `Company: ${formData.company || 'N/A'}\n` +
             `Subject: ${formData.subject}\n\n` +
             `Message:\n${formData.message}`;
    } else {
      return jsonResponse(400, { error: "Invalid or missing 'formType' in request body" }, corsHeaders);
    }

    // 6. Configure and send the email
    const client = new SmtpClient();
    await client.connectTLS({
      hostname: Deno.env.get("SMTP_HOST")!,
      port: parseInt(Deno.env.get("SMTP_PORT")!),
      username: Deno.env.get("SMTP_USER")!,
      password: Deno.env.get("SMTP_PASSWORD")!,
    });

    await client.send({
      from: `"HOSS Contact" <${Deno.env.get("SMTP_USER")!}>`,
      to: "info@thehoss.co.uk",
      subject: subject,
      content: emailBody,
    });

    await client.close();

    // 7. Return success response
    return jsonResponse(200, { success: true }, corsHeaders);

  } catch (error) {
    console.error("Error in send-email function:", error);
    return jsonResponse(500, { success: false, error: "Failed to send email" }, corsHeaders);
  }
});