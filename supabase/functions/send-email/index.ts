import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // 1. Check for required secrets first
    const requiredSecrets = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD"];
    for (const secret of requiredSecrets) {
      if (!Deno.env.get(secret)) {
        throw new Error(`Missing required secret in Supabase dashboard: ${secret}`);
      }
    }

    // 2. Parse the request body
    const { formType, ...formData } = await req.json()

    // 3. Attempt to connect to the SMTP server
    const client = new SmtpClient();
    try {
      await client.connectTLS({
        hostname: Deno.env.get("SMTP_HOST")!,
        port: parseInt(Deno.env.get("SMTP_PORT")!),
        username: Deno.env.get("SMTP_USER")!,
        password: Deno.env.get("SMTP_PASSWORD")!,
      });
    } catch (connectionError) {
      console.error("SMTP Connection Error:", connectionError);
      throw new Error(`Failed to connect to SMTP server. Please verify your SMTP credentials and firewall settings. Original error: ${connectionError.message}`);
    }

    // 4. Prepare the email content
    let subject = '';
    let body = '';

    if (formType === 'demo') {
      subject = 'New Demo Request from HOSS Website';
      body = `A new demo has been requested with the following details:\n\n` +
             `Name: ${formData.firstName} ${formData.lastName}\n` +
             `Email: ${formData.email}\n` +
             `Phone: ${formData.phone}\n` +
             `Company: ${formData.company}\n` +
             `Industry: ${formData.industry}\n` +
             `Fleet Size: ${formData.fleetSize}\n` +
             `Preferred Date: ${formData.preferredDate || 'Not specified'}\n` +
             `Preferred Time: ${formData.preferredTime || 'Not specified'}\n` +
             `Challenges: ${formData.challenges || 'Not specified'}\n`;
    } else if (formType === 'contact') {
      subject = `New Contact Form Submission: ${formData.subject}`;
      body = `A new message has been received from the contact form:\n\n` +
             `Name: ${formData.name}\n` +
             `Email: ${formData.email}\n` +
             `Phone: ${formData.phone || 'Not specified'}\n` +
             `Company: ${formData.company || 'Not specified'}\n` +
             `Subject: ${formData.subject}\n\n` +
             `Message:\n${formData.message}`;
    } else {
      throw new Error('Invalid form type specified.');
    }

    // 5. Attempt to send the email
    try {
      await client.send({
        from: `HOSS Noreply <${Deno.env.get("SMTP_USER")!}>`,
        to: "info@thehoss.co.uk",
        subject,
        content: body,
      });
    } catch (sendError) {
      console.error("SMTP Send Error:", sendError);
      throw new Error(`Failed to send email after connecting. The server rejected the message. Original error: ${sendError.message}`);
    }

    await client.close();

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error('Error in send-email function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
})