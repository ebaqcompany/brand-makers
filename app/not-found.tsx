import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";

const DARK = "#323E48";

export default function NotFound() {
  return (
    <SiteShell>
      <section
        className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center"
        style={{ minHeight: "60vh" }}
      >
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[2px]"
          style={{ color: "#00A1E1" }}
        >
          404
        </p>
        <h1
          className="mb-4 text-[52px] leading-[1.0] tracking-[-6px] md:text-[100px]"
          style={{ color: DARK }}
        >
          Page Not Found
        </h1>
        <p
          className="mb-10 max-w-md text-lg leading-relaxed"
          style={{ color: "rgba(50,62,72,0.7)" }}
        >
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <BmButton href="/" variant="primary">
          Back to Home
        </BmButton>
      </section>
    </SiteShell>
  );
}
