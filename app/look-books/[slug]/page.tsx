import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { PdfFlipbook } from "@/components/pdf-flipbook";
import { LOOK_BOOKS, getBookBySlug } from "@/lib/look-books";

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
          <PdfFlipbook
            basePath={book.basePath}
            totalPages={book.totalPages}
            title={book.title}
          />
        </div>
      </section>
    </SiteShell>
  );
}
