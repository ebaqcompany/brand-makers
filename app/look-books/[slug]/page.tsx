import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { PdfFlipbook } from "@/components/pdf-flipbook";
import { LOOK_BOOKS, getBookBySlug } from "@/lib/look-books";

const BLUE = "#00A1E1";
const DARK = "#323E48";

export function generateStaticParams() {
  return LOOK_BOOKS.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Not Found" };
  return {
    title: `${book.title} — Look Books — Brand Makers`,
    description: `Browse ${book.title} — ${book.totalPages} pages of curated brand inspiration.`,
  };
}

export default async function LookBookViewerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  return (
    <SiteShell>
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: "#F0F0F0" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <a
            href="/look-books"
            className="mb-8 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: BLUE }}
          >
            &larr; All Look Books
          </a>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            {book.subtitle || "Look Book"}
          </p>
          <h1
            className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            {book.title}
          </h1>

          <PdfFlipbook
            basePath={book.basePath}
            totalPages={book.totalPages}
          />
        </div>
      </section>
    </SiteShell>
  );
}
