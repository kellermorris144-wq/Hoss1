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
    // 4. Parse request body and validate required fields
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return jsonResponse(400, { error: "Missing required fields: name, email, message" }, corsHeaders);
    }

    // 5. Check for required environment variables (set as Supabase secrets)
    const smtpPassword = Deno.env.get("EMAIL_PASSWORD"); // Using the name you specified
    if (!smtpPassword) {
        console.error("Missing EMAIL_PASSWORD secret in Supabase function settings.");
        throw new Error("Server configuration error.");
    }

    // 6. Configure and send the email
    const client = new SmtpClient();
    await client.connectTLS({
      hostname: "mail.thehoss.co.uk",
      port: 465,
      username: "noreply@thehoss.co.uk",
      password: smtpPassword,
    });

    await client.send({
      from: `"HOSS Contact" <noreply@thehoss.co.uk>`,
      to: "info@thehoss.co.uk",
      subject: `New contact form from ${name}`,
      content: `From: ${name} <${email}>\n\n${message}`,
    });

    await client.close();

    // 7. Return success response
    return jsonResponse(200, { success: true }, corsHeaders);

  } catch (error) {
    console.error("Error sending email:", error);
    return jsonResponse(500, { success: false, error: "Failed to send email" }, corsHeaders);
  }
});