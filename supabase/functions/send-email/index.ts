// This is a Deno function. Before deploying, ensure secrets are set in your Supabase project.
// Deploy command: supabase functions deploy send-email --no-verify-jwt

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
    // 4. Get SMTP secrets from environment
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = Deno.env.get("SMTP_PORT");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
      const configError = new Error("Server configuration error: Missing one or more required SMTP secrets (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD)");
      console.error(configError);
      return jsonResponse(500, { success: false, error: configError.message }, corsHeaders);
    }

    // 5. Parse request body and validate required fields
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return jsonResponse(400, { error: "Missing required fields: name, email, message" }, corsHeaders);
    }

    // 6. Configure and send the email using Deno's SmtpClient
    const client = new SmtpClient();
    
    await client.connectTLS({
      hostname: smtpHost,
      port: parseInt(smtpPort),
      username: smtpUser,
      password: smtpPassword,
    });

    await client.send({
      from: `"HOSS Contact" <${smtpUser}>`,
      to: "info@thehoss.co.uk",
      subject: `New contact form from ${name}`,
      content: `From: ${name} <${email}>\n\n${message}`,
    });

    await client.close();

    // 7. Return success response
    return jsonResponse(200, { success: true }, corsHeaders);

  } catch (err) {
    // Catch any error, log it, and return a structured error response
    console.error(err);
    return jsonResponse(500, { success: false, error: err.message }, corsHeaders);
  }
});