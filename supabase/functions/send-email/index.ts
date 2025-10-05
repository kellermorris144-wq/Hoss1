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

    // 5. Get SMTP password from Supabase secrets
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");
    if (!smtpPassword) {
        const configError = new Error("Server configuration error: Missing required secret 'SMTP_PASSWORD'");
        console.error(configError);
        return jsonResponse(500, { success: false, error: configError.message, stack: configError.stack }, corsHeaders);
    }

    // 6. Configure and send the email
    const client = new SmtpClient();
    
    try {
      await client.connectTLS({
        hostname: "mail.nkwebsolutions.com",
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
    } catch (emailError) {
      // Catch errors specifically from the email sending process
      console.error("SMTP Error:", emailError);
      throw emailError; // Re-throw to be caught by the outer catch block
    }

    // 7. Return success response
    return jsonResponse(200, { success: true }, corsHeaders);

  } catch (error) {
    // This outer catch handles any error, including the re-thrown emailError
    console.error("Full error in send-email function:", error);
    return jsonResponse(500, { success: false, error: error.message, stack: error.stack }, corsHeaders);
  }
});