"use client";

import type { Metadata } from "next";
import { useState } from "react";
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [helpWith, setHelpWith] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, phone, email, company, helpWith, message });
  };

  return (
    <SiteShell>
      <section className="py-20 md:py-[80px]">
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
              {/* Name + Phone row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-md border-gray-300 focus:border-[#00A1E1] focus:ring-[#00A1E1]"
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="phone" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-md border-gray-300 focus:border-[#00A1E1] focus:ring-[#00A1E1]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md border-gray-300 focus:border-[#00A1E1] focus:ring-[#00A1E1]"
                />
              </div>

              {/* Company */}
              <div className="grid w-full items-center">
                <Label htmlFor="company" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  Company
                </Label>
                <Input
                  type="text"
                  id="company"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="rounded-md border-gray-300 focus:border-[#00A1E1] focus:ring-[#00A1E1]"
                />
              </div>

              {/* I want help with */}
              <div className="grid w-full items-center">
                <Label htmlFor="help-with" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  I want help with:
                </Label>
                <Select value={helpWith} onValueChange={(v) => setHelpWith(v ?? "")}>
                  <SelectTrigger className="rounded-md border-gray-300 focus:border-[#00A1E1] focus:ring-[#00A1E1]">
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

              {/* Message */}
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2 text-sm font-medium" style={{ color: DARK }}>
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message..."
                  className="min-h-[180px] rounded-md border-gray-300 focus:border-[#00A1E1] focus:ring-[#00A1E1]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Submit */}
              <div className="mt-2">
                <BmButton variant="primary">
                  Send
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
