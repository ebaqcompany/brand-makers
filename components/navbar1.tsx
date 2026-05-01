"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { BmButton } from "@/components/bm-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { hamburgerMenuLinks, type SiteLink } from "@/lib/navigation-links";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    mobileSrc?: string;
    alt: string;
    title: string;
    className?: string;
  };
  mobilePanelLogoSrc?: string;
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  mobilePanelLogoSrc,
  menu = [],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
  className,
}: Navbar1Props) => {
  return (
    <section className={cn("py-4", className)}>
      <div className="max-w-[1200px] mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo — wide version on md+, stacked on small */}
          <Link href={logo.url} className="flex items-center gap-2 shrink-0">
            <img
              src={logo.src}
              className="hidden md:block max-h-8"
              alt={logo.alt}
            />
            <img
              src={logo.mobileSrc || logo.src}
              className="block md:hidden max-h-10"
              alt={logo.alt}
            />
            {logo.title && (
              <span className="text-lg font-semibold tracking-tighter hidden lg:inline">
                {logo.title}
              </span>
            )}
          </Link>

          <div className="flex items-center gap-3">
            <BmButton href={auth.signup.url} className="hidden md:inline-flex">
              {auth.signup.title}
            </BmButton>

            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="border-0 bg-transparent hover:bg-transparent" />}>
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent className="w-[min(420px,88vw)] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <img src={mobilePanelLogoSrc || logo.src} className="max-h-8" alt={logo.alt} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 p-4 pt-2" aria-label="Main menu">
                  {hamburgerMenuLinks.map((link) => (
                    <MenuLink key={link.title} link={link} />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </section>
  );
};

const menuLinkClass =
  "rounded-md px-3 py-2 text-base font-medium leading-tight transition-colors hover:bg-muted";

const MenuLink = ({ link }: { link: SiteLink }) => {
  if (link.external) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={menuLinkClass}
        style={{ color: "#323E48" }}
      >
        {link.title}
      </a>
    );
  }

  return (
    <Link href={link.url} className={menuLinkClass} style={{ color: "#323E48" }}>
      {link.title}
    </Link>
  );
};

export { Navbar1 };
