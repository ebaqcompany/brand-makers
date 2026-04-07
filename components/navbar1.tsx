"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { BmButton } from "@/components/bm-button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

          {/* Center nav links — desktop only */}
          {menu.length > 0 && (
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* About Us + Log In — desktop only (lg+) */}
            <Link href="/about" className="hidden lg:block text-sm font-medium transition-colors hover:opacity-70" style={{ color: "#323E48" }}>
              About Us
            </Link>
            <a href={auth.login.url} className="hidden lg:block text-sm font-medium transition-colors hover:opacity-70" style={{ color: "#323E48" }}>
              Log In
            </a>

            {/* CTA button — tablet+ (md+), hidden on small mobile */}
            <div className="hidden md:block">
              <BmButton href={auth.signup.url} variant="primary" size="md">
                {auth.signup.title}
              </BmButton>
            </div>

            {/* Hamburger — visible below lg */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger render={<Button variant="outline" size="icon" />}>
                  <Menu className="size-4" />
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={logo.url} className="flex items-center gap-2">
                        <img src={logo.src} className="max-h-8" alt={logo.alt} />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion className="flex w-full flex-col gap-4">
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    <Link href="/about" className="text-md font-semibold" style={{ color: "#323E48" }}>
                      About Us
                    </Link>
                    <a href={auth.login.url} className="text-md font-semibold" style={{ color: "#323E48" }}>
                      Log In
                    </a>
                    <BmButton href={auth.signup.url} variant="primary">
                      {auth.signup.title}
                    </BmButton>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink key={subItem.title} className="w-80" render={<SubMenuLink item={subItem} />}></NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar1 };
