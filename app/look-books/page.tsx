import { SiteShell } from "@/components/site-shell";
import { LOOK_BOOKS } from "@/lib/look-books";

const BLUE = "#00A1E1";
const DARK = "#323E48";

export const metadata = {
  title: "Look Books — Brand Makers",
  description:
    "Browse our curated look books for seasonal collections and fresh brand inspiration.",
};

export default function LookBooksPage() {
  return (
    <SiteShell>
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: "#F0F0F0" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Look Books
          </p>
          <h1
            className="mb-4 text-[52px] leading-[1.0] tracking-[-6px] md:text-[100px]"
            style={{ color: DARK }}
          >
            Browse Our Collections
          </h1>
          <p
            className="mb-16 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            Flip through our curated look books for seasonal collections
            and fresh brand inspiration.
          </p>

          {/* 3-column grid of covers */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LOOK_BOOKS.map((book) => (
              <a
                key={book.slug}
                href={`/look-books/${book.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full aspect-[3/4] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  {book.subtitle && (
                    <p
                      className="mb-1 text-xs font-medium uppercase tracking-[2px]"
                      style={{ color: BLUE }}
                    >
                      {book.subtitle}
                    </p>
                  )}
                  <h3
                    className="text-lg font-medium leading-snug tracking-[-0.5px]"
                    style={{ color: DARK }}
                  >
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: "rgba(50,62,72,0.5)" }}>
                    {book.totalPages} pages
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
