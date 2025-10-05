import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts"

// This is set in your Supabase project's Edge Function secrets
const ALLOWED_ORIGIN = Deno.env.get("ALLOWED_ORIGIN") ?? "";

// Centralized CORS headers for all responses
const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info, accept",
  "Access-Control-Max-Age": "86400", // Cache preflight response for 24 hours
};

// Helper to create structured JSON responses with CORS headers
function jsonResponse(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

serve(async (req: Request) => {
  // 1. Handle CORS preflight request immediately
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // 2. Validate request method and content type
  if (req.method !== "POST") {
    return jsonResponse(405, { status: "error", message: "Method Not Allowed" });
  }
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return jsonResponse(415, { status: "error", message: "Unsupported Media Type: Must be application/json" });
  }

  try {
    // 3. Check for required secrets
    const requiredSecrets = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD"];
    for (const secret of requiredSecrets) {
      if (!Deno.env.get(secret)) {
        throw new Error(`Server configuration error: Missing required secret '${secret}'`);
      }
    }

    // 4. Parse and validate the request body
    const body = await req.json().catch(() => null);
    if (!body) {
      return jsonResponse(400, { status: "error", message: "Invalid JSON body" });
    }
    const { formType, ...formData } = body;

    let subject = '';
    let emailBody = '';

    if (formType === 'demo') {
      const required = ['firstName', 'lastName', 'email', 'phone', 'company', 'industry', 'fleetSize'];
      for (const field of required) {
        if (!formData[field]) {
          return jsonResponse(400, { status: "error", message: `Missing required field for demo form: ${field}` });
        }
      }
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
      const required = ['name', 'email', 'subject', 'message'];
       for (const field of required) {
        if (!formData[field]) {
          return jsonResponse(400, { status: "error", message: `Missing required field for contact form: ${field}` });
        }
      }
      subject = `New Contact Form Submission: ${formData.subject}`;
      emailBody = `New message from contact form:\n\n` +
             `Name: ${formData.name}\n` +
             `Email: ${formData.email}\n` +
             `Phone: ${formData.phone || 'N/A'}\n` +
             `Company: ${formData.company || 'N/A'}\n` +
             `Subject: ${formData.subject}\n\n` +
             `Message:\n${formData.message}`;
    } else {
      return jsonResponse(400, { status: "error", message: `Invalid or missing formType specified.` });
    }

    // 5. Connect to SMTP and send email
    const client = new SmtpClient();
    await client.connectTLS({
      hostname: Deno.env.get("SMTP_HOST")!,
      port: parseInt(Deno.env.get("SMTP_PORT")!),
      username: Deno.env.get("SMTP_USER")!,
      password: Deno.env.get("SMTP_PASSWORD")!,
    });

    await client.send({
      from: `HOSS Noreply <${Deno.env.get("SMTP_USER")!}>`,
      to: "info@thehoss.co.uk",
      subject,
      content: emailBody,
    });
    await client.close();

    return jsonResponse(200, { status: "ok", message: "Email sent successfully" });

  } catch (error) {
    console.error("send-email function error:", error?.stack || error);
    return jsonResponse(500, { status: "error", message: "Internal Server Error", details: error.message });
  }
})