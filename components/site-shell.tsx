import { Navbar1 } from "@/components/navbar1";
import { Footer2 } from "@/components/footer2";

// ── SiteShell ─────────────────────────────────────────────────────────────────
// Wraps any inner page with the shared sticky navbar and dark footer.
// Usage: wrap the page content in <SiteShell>…</SiteShell>

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      {/* Sticky navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
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
          className="bg-white"
        />
      </div>

      {/* Page content */}
      <main className="flex flex-col w-full overflow-x-hidden flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}
