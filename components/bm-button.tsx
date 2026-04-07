import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// ── Brand Makers Button ───────────────────────────────────────────────────────
// Consistent pill CTA. Change variant for fill, outline, or dark.
// Renders <a> when href is provided, <button> otherwise.
//
// Usage:
//   <BmButton href="/lets-connect">Let's Connect</BmButton>
//   <BmButton variant="dark" href="#services">See How</BmButton>
//   <BmButton variant="outline">Learn More</BmButton>

type Variant = "primary" | "dark" | "outline" | "outline-light";
type Size    = "md";

const VARIANTS: Record<Variant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#00A1E1",
    color: "#FFFFFF",
    border: "2px solid #00A1E1",
  },
  dark: {
    backgroundColor: "#323E48",
    color: "#FFFFFF",
    border: "2px solid #323E48",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#323E48",
    border: "2px solid #323E48",
  },
  "outline-light": {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "2px solid rgba(255,255,255,0.35)",
  },
};

const SIZES: Record<Size, React.CSSProperties> = {
  md: {
    padding: "13px 28px",
    fontSize: "14px",
    lineHeight: "1.35",
  },
};

const BASE: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  textDecoration: "none",
  cursor: "pointer",
  transition: "opacity 150ms ease, transform 100ms ease",
};

interface BmButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  children: React.ReactNode;
  /** Pass any extra inline styles (e.g. hover overrides via JS) */
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function BmButton({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  onClick,
  className,
  children,
  style,
  disabled,
  type = "button",
}: BmButtonProps) {
  const combined: React.CSSProperties = {
    ...BASE,
    ...VARIANTS[variant],
    ...SIZES[size],
    ...style,
  };

  const sharedProps = {
    style: combined,
    className: cn(
      "hover:opacity-85 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      className
    ),
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (isExternal) {
      return (
        <a href={href} target={target} rel={rel} {...sharedProps}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...sharedProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} {...sharedProps}>
      {children}
    </button>
  );
}
