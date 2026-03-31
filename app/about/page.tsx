import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About Us — Brand Makers",
  description:
    "We are a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">

          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            About Us
          </p>

          <h1
            className="mb-6 text-[clamp(40px,6vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK, maxWidth: 700 }}
          >
            We Make Your Brand Look Good
          </h1>

          <p
            className="mb-12 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            We are a passionate team dedicated to creating innovative solutions
            that empower businesses to thrive in the digital age. With years of
            experience in design and development, we craft beautiful, memorable
            brand experiences that help teams build faster.
          </p>

          {/* Group photo placeholder */}
          <div
            className="w-full rounded-2xl"
            style={{
              aspectRatio: "16 / 7",
              backgroundColor: "#E8EFF4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="text-center">
              <div
                className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(0,161,225,0.1)" }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={BLUE}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: "rgba(50,62,72,0.35)" }}
              >
                Team photo
              </p>
            </div>
          </div>

        </div>
      </section>
    </SiteShell>
  );
}
