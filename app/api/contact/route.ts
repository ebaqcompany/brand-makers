import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const helpWith = formData.get("helpWith") as string;
    const heardAbout = formData.get("heardAbout") as string;
    const message = formData.get("message") as string;

    // Collect file attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    const files = formData.getAll("files");
    for (const file of files) {
      if (file instanceof File && file.size > 0) {
        const bytes = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: Buffer.from(bytes),
        });
      }
    }

    await resend.emails.send({
      from: "Brand Makers <onboarding@resend.dev>",
      to: "contact@brandmakers.com",
      replyTo: email,
      subject: `New Contact Form: ${firstName} ${lastName} — ${helpWith || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${company || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Help With</td><td style="padding:8px;">${helpWith || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Heard About Us</td><td style="padding:8px;">${heardAbout || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Attachments</td><td style="padding:8px;">${attachments.length > 0 ? attachments.map((a) => a.filename).join(", ") : "None"}</td></tr>
        </table>
      `,
      ...(attachments.length > 0 ? { attachments } : {}),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
