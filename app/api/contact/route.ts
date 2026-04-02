import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = (formData.get("firstName") as string)?.trim() || "";
    const lastName = (formData.get("lastName") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const company = (formData.get("company") as string)?.trim() || "";
    const helpWith = (formData.get("helpWith") as string)?.trim() || "";
    const heardAbout = (formData.get("heardAbout") as string)?.trim() || "";
    const message = (formData.get("message") as string)?.trim() || "";

    // Server-side validation
    const missing: string[] = [];
    if (!firstName) missing.push("First Name");
    if (!lastName) missing.push("Last Name");
    if (!email) missing.push("Email");
    if (!message) missing.push("Tell us about your project");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Required fields missing: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Collect file attachments as base64 for Resend
    const attachments: { filename: string; content: string }[] = [];
    const files = formData.getAll("files");
    for (const file of files) {
      if (file instanceof File && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const base64 = Buffer.from(bytes).toString("base64");
        attachments.push({
          filename: file.name,
          content: base64,
        });
      }
    }

    const textBody = [
      `New Contact Form Submission`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Company: ${company || "—"}`,
      `Help With: ${helpWith || "—"}`,
      `Heard About Us: ${heardAbout || "—"}`,
      `Message: ${message}`,
      `Attachments: ${attachments.length > 0 ? attachments.map((a) => a.filename).join(", ") : "None"}`,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: "Brand Makers <hello@brandmakers.com>",
      to: "contact@brandmakers.com",
      replyTo: email,
      subject: `New Contact Form: ${firstName} ${lastName} — ${helpWith || "General Inquiry"}`,
      text: textBody,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${company || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Help With</td><td style="padding:8px;">${helpWith || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Heard About Us</td><td style="padding:8px;">${heardAbout || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message.replace(/\n/g, "<br>")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Attachments</td><td style="padding:8px;">${attachments.length > 0 ? attachments.map((a) => a.filename).join(", ") : "None"}</td></tr>
        </table>
      `,
      ...(attachments.length > 0 ? { attachments } : {}),
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error));
      return NextResponse.json(
        { error: `Email send failed: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
