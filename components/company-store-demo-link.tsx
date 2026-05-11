"use client";

import type { CSSProperties, ReactNode } from "react";

type CompanyStoreDemoLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function CompanyStoreDemoLink({
  href,
  children,
  className,
  style,
}: CompanyStoreDemoLinkProps) {
  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={(event) => {
        event.preventDefault();
        window.location.href = href;
      }}
    >
      {children}
    </a>
  );
}
