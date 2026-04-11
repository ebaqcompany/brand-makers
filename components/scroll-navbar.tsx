"use client";

import { useEffect, useState } from "react";
import { Navbar1 } from "@/components/navbar1";

export function ScrollNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Turn opaque when the services section reaches the navbar
      const services = document.getElementById("services");
      if (services) {
        const rect = services.getBoundingClientRect();
        setScrolled(rect.top <= 80);
      } else {
        // Fallback: after hero scroll area
        const threshold = window.innerHeight * 2.4;
        setScrolled(window.scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300"
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
      }}
    >
      <Navbar1
        logo={{
          url: "/",
          src: "/brandmakers-logo.svg",
          mobileSrc: "/brandmakers-logo2.svg",
          alt: "Brand Makers",
          title: "",
        }}
        menu={[]}
        auth={{
          login: {
            title: "Log In",
            url: "https://catalog.brandmakers.com/auth/login",
          },
          signup: {
            title: "Let's Connect",
            url: "/lets-connect",
          },
        }}
      />
    </div>
  );
}
