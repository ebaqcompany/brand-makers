@AGENTS.md

# Brand Makers — Design System & Project Rules

## Project
- Site: brandmakers.com
- Stack: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui
- Deploy: Vercel (static)

## Layout
- Max page width: 1440px
- Content width: 1200px (centered, with horizontal padding)
- Section padding vertical: 80px desktop, 48px mobile
- Use: `max-w-[1200px] mx-auto px-6` for all content containers

## Colors
- Primary Blue: #00A1E1
- Dark Blue / Text: #323E48
- Light Grey Background: #F0F0F0
- White: #FFFFFF
- Use Primary Blue for: CTA buttons, icons, highlights,
  active states, links
- Use Dark Blue for: all headings, navbar, footer background
- Never use red, pink, or other placeholder colors

## Alternating Section Backgrounds
Sections alternate in this pattern:
1. White (#FFFFFF)
2. Light Grey (#F0F0F0)
3. White (#FFFFFF)
4. etc.
Exception: Hero is white,
Services Grid uses Dark Blue (#323E48),
Search for Merch uses Primary Blue (#00A1E1),
Footer uses Dark Blue (#323E48)

## Typography — all Inter font
Import Inter via: import { Inter } from 'next/font/google'

### H1
- Font: Inter
- Weight: 400 (Regular)
- Size: 100px desktop, 52px mobile
- Letter spacing: -6px
- Color: #323E48
- Line height: 1.0

### H2
- Font: Inter
- Weight: 400 (Regular)
- Size: 60px desktop, 36px mobile
- Letter spacing: -3px
- Color: #323E48
- Line height: 1.1

### H3
- Font: Inter
- Weight: 500 (Medium)
- Size: 32px desktop, 24px mobile
- Letter spacing: -1px
- Color: #323E48
- Line height: 1.2

### Body Large
- Font: Inter
- Weight: 400 (Regular)
- Size: 18px
- Letter spacing: 0
- Color: #323E48
- Line height: 1.6

### Body Normal
- Font: Inter
- Weight: 400 (Regular)
- Size: 16px
- Letter spacing: 0
- Color: #323E48 at 80% opacity for secondary text
- Line height: 1.6

### Label / Caption
- Font: Inter
- Weight: 500 (Medium)
- Size: 12px
- Letter spacing: 2px
- Uppercase
- Color: #00A1E1

## Buttons
- Primary: bg #00A1E1, text white,
  border-radius 4px, padding 14px 28px
- Primary Hover: bg #0088be (darker blue)
- Secondary: border 2px solid #323E48,
  text #323E48, transparent background
- Secondary Hover: bg #323E48, text white
- Font: Inter Medium, 16px, letter-spacing 0.5px

## Assets
- Logo (header): /public/brandmakers-logo.svg
- Logo (footer): /public/brandmakers-logo-footer.svg
- Hat Bar logo: /public/hat-bar-logo.svg (add when ready)
- Images: /public/images/[section-name]/
- Icons: Lucide React (placeholders until
  custom icons provided by design team)

## Pages
- / (Home)
- /about
- /lets-connect
- /search-for-merch
- /company-stores
- /kitting-and-fulfillment
- /custom-headwear
- /custom-products
- /on-site-experiences
- /retail-brand-partners
- /our-responsibility
- /creative-services

## Navigation
- Logo left: /public/brandmakers-logo.svg
- Center links (desktop): Search for Merch,
  Company Stores, Kitting & Fulfillment,
  Custom Headwear, Custom Products,
  On-Site Experiences, Retail Brand Partners,
  Our Responsibility
- Top right CTA: "Let's Connect" primary blue button
  linking to /lets-connect
- Mobile: collapse center links to hamburger menu
- Secondary links (small, top bar or footer only):
  Creative Services, Log In, Terms and Conditions,
  Client Application

## Section Order — Homepage
1. Navbar
2. Hero — white bg
3. Services Grid (How We Do It) — dark bg #323E48
4. Search for Merch — primary blue bg #00A1E1
5. Company Stores — white bg
6. Kitting and Fulfillment — light grey bg #F0F0F0
7. Custom Headwear — white bg
8. Custom Merch — light grey bg #F0F0F0
9. Creative Services — white bg
10. On-Site Experiences — dark bg #323E48
11. Retail Brand Partners — white bg
12. Testimonials — light grey bg #F0F0F0
13. Footer — dark bg #323E48

## Contact Info
- Phone: 801-798-6470
- Email: contact@brandmakers.com
- Address: 464 South Main Street,
  Spanish Fork, UT 84660
- Facebook: https://www.facebook.com/brandmakersutah/
- LinkedIn: linkedin.com/company/brand-makers/
- Instagram: https://www.instagram.com/brandmakers/
- Catalog login: https://catalog.brandmakers.com/auth/login
- Client application: https://brandmakersbox.typeform.com/3minuteintake
- Terms & Conditions: https://brandmakers.com/wp-content/uploads/2025/11/Brand-Makers-Terms-and-Conditions.pdf

## Rules for Claude Code
- Always read this file before starting any task
- Always use max-w-[1200px] mx-auto px-6
  for all content containers
- Always import Inter from next/font/google
- Never hardcode colors outside of this system
- Keep all sections fully mobile responsive
- Alternate section backgrounds as defined above
- Never leave red, pink, or random placeholder
  background colors in output
- Run npm run build after major changes
  and fix all TypeScript errors before finishing
- When in doubt about design decisions,
  refer back to this file
