export const runtime = 'nodejs';

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✔️ loaded" : "❌ missing");

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,       // ✅ fix here
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: `
You have a new contact message.

Name: ${name}
Email: ${email}
Message:
${message}
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ error: 'Email failed to send' }), { status: 500 });
  }
}