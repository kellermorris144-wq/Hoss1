import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Helper to format form data into a readable string for the email body
function formatObjectForEmail(data: Record<string, any>): string {
  // Remove formType from the email body and format the rest
  const { formType, ...rest } = data;
  return Object.entries(rest)
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value || 'N/A'}`)
    .join('\n');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { formType, ...formData } = req.body;

  try {
    // 1. Configure Nodemailer transport from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let subject = '';
    let text = '';

    // 2. Handle different form types
    if (formType === 'contact') {
      const { subject: formSubject } = formData;
      subject = `New Contact Form Submission: ${formSubject || 'General Inquiry'}`;
      text = `You have a new message from your website's contact form.\n\n---\n\n${formatObjectForEmail(formData)}`;
    } else if (formType === 'demo') {
      const { company } = formData;
      subject = `New Demo Request from ${company}`;
      text = `You have a new demo request.\n\n---\n\n${formatObjectForEmail(formData)}`;
    } else {
      return res.status(400).json({ success: false, error: "Invalid or missing formType in request body" });
    }

    // 3. Send the email
    await transporter.sendMail({
      from: `"HOSS Website" <${process.env.SMTP_USER}>`,
      to: 'info@thehoss.co.uk',
      subject,
      text,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ success: false, error: errorMessage });
  }
}