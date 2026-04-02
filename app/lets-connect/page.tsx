"use client";

import type { Metadata } from "next";
import { useCallback, useRef, useState } from "react";
import { BiEnvelope, BiMap, BiPhone, BiShareAlt } from "react-icons/bi";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BLUE = "#00A1E1";
const DARK = "#323E48";

/** Shared styles for all form inputs */
const INPUT_CLASS =
  "h-12 rounded-md border-gray-300 bg-white px-4 text-base focus:border-[#00A1E1] focus:ring-[#00A1E1]";

const HELP_OPTIONS = [
  "Search for Merch",
  "Company Stores",
  "Kitting & Fulfillment",
  "Custom Headwear",
  "Custom Merch",
  "On-Site Experiences",
  "Creative Services",
  "Something Else",
];

const contacts = [
  {
    icon: <BiEnvelope className="size-6" style={{ color: BLUE }} />,
    title: "Email",
    value: "contact@brandmakers.com",
    href: "mailto:contact@brandmakers.com",
  },
  {
    icon: <BiPhone className="size-6" style={{ color: BLUE }} />,
    title: "Phone",
    value: "801-798-6470",
    href: "tel:801-798-6470",
  },
  {
    icon: <BiMap className="size-6" style={{ color: BLUE }} />,
    title: "Address",
    value: "464 South Main Street, Spanish Fork, UT 84660",
    href: "https://www.google.com/maps/place/Brand+Makers/@40.0977,-111.6559,17z/",
  },
];

const socialLinks = [
  { href: "https://www.facebook.com/brandmakersutah/", icon: <BiLogoFacebookCircle className="size-6" /> },
  { href: "https://linkedin.com/company/brand-makers/", icon: <BiLogoLinkedinSquare className="size-6" /> },
  { href: "https://www.instagram.com/brandmakers/", icon: <BiLogoInstagram className="size-6" /> },
];

export default function LetsConnectPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [helpWith, setHelpWith] = useState("");
  const [heardAbout, setHeardAbout] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((incoming: FileList | null) => {
    if (!incoming) return;
    setFiles((prev) => [...prev, ...Array.from(incoming)]);
  }, []);

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    // Client-side validation
    const missing: string[] = [];
    if (!firstName.trim()) missing.push("First Name");
    if (!lastName.trim()) missing.push("Last Name");
    if (!email.trim()) missing.push("Email");
    if (!message.trim()) missing.push("Tell us about your project");

    if (missing.length > 0) {
      setError(`Please fill in: ${missing.join(", ")}`);
      return;
    }

    setSending(true);

    try {
      const body = new FormData();
      body.append("firstName", firstName.trim());
      body.append("lastName", lastName.trim());
      body.append("phone", phone.trim());
      body.append("email", email.trim());
      body.append("company", company.trim());
      body.append("helpWith", helpWith);
      body.append("heardAbout", heardAbout.trim());
      body.append("message", message.trim());
      files.forEach((f) => body.append("files", f));

      const res = await fetch("/api/contact", { method: "POST", body });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send");

      setSent(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(`${msg}. Please try again or email us directly at contact@brandmakers.com`);
    } finally {
      setSending(false);
    }
  };

  return (
    <SiteShell>
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: "#F0F0F0" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Heading */}
          <div className="mb-12 md:mb-16">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[2px]"
              style={{ color: BLUE }}
            >
              Contact
            </p>
            <h1
              className="text-[52px] leading-[1.0] tracking-[-6px] md:text-[100px]"
              style={{ color: DARK }}
            >
              Let&apos;s Connect
            </h1>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-[1fr_1fr]">
            {/* Left: form */}
            <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
              {/* First Name + Last Name row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="grid w-full items-center">
                  <Label htmlFor="first-name" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                    First Name <span style={{ color: "#00A1E1" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    id="first-name"
                    name="given-name"
                    autoComplete="given-name"
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={INPUT_CLASS}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="last-name" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                    Last Name <span style={{ color: "#00A1E1" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    id="last-name"
                    name="family-name"
                    autoComplete="family-name"
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              {/* Phone + Email row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="grid w-full items-center">
                  <Label htmlFor="phone" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="tel"
                    autoComplete="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={INPUT_CLASS}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                    Email <span style={{ color: "#00A1E1" }}>*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              {/* Company */}
              <div className="grid w-full items-center">
                <Label htmlFor="company" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  Company
                </Label>
                <Input
                  type="text"
                  id="company"
                  name="organization"
                  autoComplete="organization"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={INPUT_CLASS}
                />
              </div>

              {/* I want help with */}
              <div className="grid w-full items-center">
                <Label htmlFor="help-with" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  I want help with:
                </Label>
                <Select value={helpWith} onValueChange={(v) => setHelpWith(v ?? "")}>
                  <SelectTrigger id="help-with" className={INPUT_CLASS}>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {HELP_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* How did you hear about us? */}
              <div className="grid w-full items-center">
                <Label htmlFor="heard-about" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  How did you hear about us?
                </Label>
                <Input
                  type="text"
                  id="heard-about"
                  placeholder="e.g. Google, referral, social media..."
                  value={heardAbout}
                  onChange={(e) => setHeardAbout(e.target.value)}
                  className={INPUT_CLASS}
                />
              </div>

              {/* Tell us about your project */}
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  Tell us about your project <span style={{ color: "#00A1E1" }}>*</span>
                </Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Type your message..."
                  className={`${INPUT_CLASS} min-h-[180px] py-3`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Upload File — drag & drop zone */}
              <div className="grid w-full items-center">
                <Label htmlFor="file-upload" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  Upload File
                </Label>
                <input
                  id="file-upload"
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="*/*"
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden="true"
                  onChange={(e) => {
                    addFiles(e.target.files);
                    e.target.value = "";
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);
                    addFiles(e.dataTransfer.files);
                  }}
                  className={`flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed bg-white px-6 py-8 text-center transition-colors ${
                    dragging
                      ? "border-[#00A1E1] bg-[#00A1E1]/5"
                      : "border-gray-300 hover:border-[#00A1E1]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-8"
                    style={{ color: BLUE }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16"
                    />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: DARK }}>
                    Drag &amp; drop files here, or{" "}
                    <span style={{ color: BLUE }}>browse</span>
                  </span>
                  <span className="text-xs" style={{ color: "rgba(50,62,72,0.5)" }}>
                    PDF, AI, EPS, SVG, PNG, JPEG, ZIP, and more
                  </span>
                </button>

                {/* File list */}
                {files.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {files.map((f, i) => (
                      <li
                        key={`${f.name}-${i}`}
                        className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm"
                        style={{ color: DARK }}
                      >
                        <span className="truncate">{f.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="ml-3 shrink-0 text-xs font-medium transition-colors hover:opacity-70"
                          style={{ color: BLUE }}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Error message */}
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              {/* Success message */}
              {sent && (
                <div className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
                  Thank you! Your message has been sent. We&apos;ll be in touch soon.
                </div>
              )}

              {/* Submit */}
              <div className="mt-2">
                <BmButton type="submit" variant="primary" disabled={sending || sent}>
                  {sending ? "Sending..." : sent ? "Sent!" : "Send"}
                </BmButton>
              </div>
            </form>

            {/* Right: contact info */}
            <div className="flex flex-col gap-10">
              {contacts.map((contact) => (
                <div key={contact.title}>
                  <div className="mb-3 flex items-center gap-3">
                    {contact.icon}
                    <h3
                      className="text-sm font-medium uppercase tracking-[2px]"
                      style={{ color: DARK }}
                    >
                      {contact.title}
                    </h3>
                  </div>
                  <a
                    href={contact.href}
                    target={contact.title === "Address" ? "_blank" : undefined}
                    rel={contact.title === "Address" ? "noopener noreferrer" : undefined}
                    className="text-base leading-relaxed transition-colors hover:opacity-70"
                    style={{ color: "rgba(50,62,72,0.75)" }}
                  >
                    {contact.value}
                  </a>
                </div>
              ))}

              {/* Social */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <BiShareAlt className="size-6" style={{ color: BLUE }} />
                  <h3
                    className="text-sm font-medium uppercase tracking-[2px]"
                    style={{ color: DARK }}
                  >
                    Social
                  </h3>
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:opacity-70"
                      style={{ color: DARK }}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map / image placeholder */}
          <a
            href="https://www.google.com/maps/place/Brand+Makers/@40.0977,-111.6559,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 block overflow-hidden rounded-2xl md:mt-20"
          >
            <img
              src="/brand-makers-hq.jpg"
              alt="Brand Makers headquarters"
              className="h-[400px] w-full object-cover"
            />
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
