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

// Helper to format form data into a readable string for the email body
function formatObjectForEmail(data: Record<string, any>): string {
  // Remove formType from the email body and format the rest
  const { formType, ...rest } = data;
  return Object.entries(rest)
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value || 'N/A'}`)
    .join('\n');
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
    const smtpPortStr = Deno.env.get("SMTP_PORT");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");

    if (!smtpHost || !smtpPortStr || !smtpUser || !smtpPassword) {
      throw new Error("Server configuration error: Missing one or more required SMTP secrets.");
    }
    const smtpPort = parseInt(smtpPortStr);

    // 5. Parse request body and prepare email content
    const formData = await req.json();
    const { formType } = formData;

    let subject = '';
    let content = '';

    if (formType === 'contact') {
      subject = `New Contact Form Submission: ${formData.subject || 'General Inquiry'}`;
      content = `You have a new message from your website's contact form.\n\n---\n\n${formatObjectForEmail(formData)}`;
    } else if (formType === 'demo') {
      subject = `New Demo Request from ${formData.company}`;
      content = `You have a new demo request.\n\n---\n\n${formatObjectForEmail(formData)}`;
    } else {
      return jsonResponse(400, { error: "Invalid or missing formType in request body" }, corsHeaders);
    }

    // 6. Configure and send the email
    const client = new SmtpClient();
    
    await client.connectTLS({
      hostname: smtpHost,
      port: smtpPort,
      username: smtpUser,
      password: smtpPassword,
    });

    await client.send({
      from: `"HOSS Website" <${smtpUser}>`,
      to: "info@thehoss.co.uk",
      subject,
      content,
    });

    await client.close();

    // 7. Return success response
    return jsonResponse(200, { success: true }, corsHeaders);

  } catch (err) {
    // Catch any error, log it, and return a detailed error response for debugging
    console.error("Error in send-email function:", err);
    return jsonResponse(500, { 
      success: false, 
      error: err.message,
      details: String(err) // Provides more context than JSON.stringify for Error objects
    }, corsHeaders);
  }
});