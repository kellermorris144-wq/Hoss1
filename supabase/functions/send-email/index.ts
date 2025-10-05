import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Whitelist of allowed origins (no trailing slashes)
const allowedOrigins = [
  'http://localhost:3000',
  'https://hoss1.vercel.app',
  // You can also add your Vercel preview deployment URL pattern here if needed
  // For example: Deno.env.get("VERCEL_PREVIEW_URL")
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

serve(async (req: Request) => {
  const requestOrigin = req.headers.get("Origin");
  const corsHeaders = getCorsHeaders(requestOrigin);

  // 1. Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // 2. Block requests from non-allowed origins
  if (!corsHeaders["Access-Control-Allow-Origin"]) {
    return new Response(JSON.stringify({ error: "Forbidden: Origin not allowed" }), {
      status: 403,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // 3. Handle POST requests
  if (req.method === "POST") {
    // This is a dummy handler as requested.
    // You can add your email sending logic here.
    try {
      // Optional: You can still parse the body if needed for your real logic
      // const body = await req.json();
      // console.log("Received body:", body);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }

  // 4. Handle all other methods
  return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
    status: 405,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});