export interface LookBook {
  slug: string;
  title: string;
  subtitle?: string;
  basePath: string;
  totalPages: number;
  cover: string;
}

export const LOOK_BOOKS: LookBook[] = [
  {
    slug: "apparel-ideas-2026",
    title: "Apparel Ideas 2026",
    subtitle: "Brand Makers",
    basePath: "/look-books/pages/page",
    totalPages: 207,
    cover: "/look-books/pages/page-001.jpg",
  },
  {
    slug: "eco-friendly",
    title: "Eco Friendly Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/eco-friendly/page",
    totalPages: 31,
    cover: "/look-books/eco-friendly/page-01.jpg",
  },
  {
    slug: "golf",
    title: "Golf Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/golf/page",
    totalPages: 22,
    cover: "/look-books/golf/page-01.jpg",
  },
  {
    slug: "headwear",
    title: "Headwear Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/headwear/page",
    totalPages: 160,
    cover: "/look-books/headwear/page-001.jpg",
  },
  {
    slug: "hydroflask",
    title: "Hydroflask Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/hydroflask/page",
    totalPages: 17,
    cover: "/look-books/hydroflask/page-01.jpg",
  },
  {
    slug: "new-products-2026",
    title: "New Products 2026",
    subtitle: "Brand Makers",
    basePath: "/look-books/new-products/page",
    totalPages: 156,
    cover: "/look-books/new-products/page-001.jpg",
  },
  {
    slug: "retail-brand",
    title: "Retail Brand Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/retail-brand/page",
    totalPages: 20,
    cover: "/look-books/retail-brand/page-01.jpg",
  },
  {
    slug: "spring",
    title: "Spring Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/spring/page",
    totalPages: 72,
    cover: "/look-books/spring/page-01.jpg",
  },
  {
    slug: "tradeshow-display-2026",
    title: "Tradeshow Display Ideas 2026",
    subtitle: "Brand Makers",
    basePath: "/look-books/tradeshow-display/page",
    totalPages: 292,
    cover: "/look-books/tradeshow-display/page-001.jpg",
  },
  {
    slug: "tradeshow-giveaway",
    title: "Tradeshow Giveaway Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/tradeshow-giveaway/page",
    totalPages: 7,
    cover: "/look-books/tradeshow-giveaway/page-1.jpg",
  },
  {
    slug: "trending-2026",
    title: "Trending Ideas 2026",
    subtitle: "Brand Makers",
    basePath: "/look-books/trending/page",
    totalPages: 58,
    cover: "/look-books/trending/page-01.jpg",
  },
  {
    slug: "under-10",
    title: "Under $10 Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/under-10/page",
    totalPages: 44,
    cover: "/look-books/under-10/page-01.jpg",
  },
  {
    slug: "unique-colorful-2026",
    title: "Unique and Colorful Ideas 2026",
    subtitle: "Brand Makers",
    basePath: "/look-books/unique-colorful/page",
    totalPages: 10,
    cover: "/look-books/unique-colorful/page-01.jpg",
  },
  {
    slug: "usa-canada-europe",
    title: "USA, Canada and Europe Ideas",
    subtitle: "Brand Makers",
    basePath: "/look-books/usa-canada-europe/page",
    totalPages: 23,
    cover: "/look-books/usa-canada-europe/page-01.jpg",
  },
];

export function getBookBySlug(slug: string): LookBook | undefined {
  return LOOK_BOOKS.find((b) => b.slug === slug);
}
