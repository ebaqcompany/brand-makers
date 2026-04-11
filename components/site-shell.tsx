import { Navbar1 } from "@/components/navbar1";
import { Footer2 } from "@/components/footer2";

// ── SiteShell ─────────────────────────────────────────────────────────────────
// Wraps any inner page with the shared sticky navbar and dark footer.
// Usage: wrap the page content in <SiteShell>…</SiteShell>

export function SiteShell({
  children,
  transparentNavbar = false,
}: {
  children: React.ReactNode;
  transparentNavbar?: boolean;
}) {
  return (
    <div className="flex flex-col w-full">
      {/* Sticky navbar */}
      <div
        className={`sticky top-0 z-50 ${
          transparentNavbar
            ? "bg-[#F0F0F0]"
            : "bg-white border-b border-gray-200"
        }`}
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
          className={transparentNavbar ? "bg-[#F0F0F0]" : "bg-white"}
        />
      </div>

      {/* Page content */}
      <main className="flex flex-col w-full flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}
