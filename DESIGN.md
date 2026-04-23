# Brand Makers — Design Tokens

## Colors

### Brand
| Token | Value | Usage |
|-------|-------|-------|
| Primary Blue | `#00A1E1` | CTA buttons, icons, highlights, active states, links, labels |
| Primary Blue Hover | `#0088be` | Button hover state |
| Dark Blue | `#323E48` | Headings, navbar, footer bg, body text |
| Light Grey | `#F0F0F0` | Alternating section backgrounds |
| White | `#FFFFFF` | Primary backgrounds, text on dark |

### Text Opacity
| Token | Value | Usage |
|-------|-------|-------|
| Body Secondary | `rgba(50,62,72,0.7)` | Paragraph text |
| Body Tertiary | `rgba(50,62,72,0.65)` | Card descriptions |
| Body Muted | `rgba(50,62,72,0.5)` | Captions, labels |
| Body Disabled | `rgba(50,62,72,0.35)` | Inactive timeline text |
| White Primary | `text-white` | Headings on dark bg |
| White Secondary | `text-white/80` | Body on dark bg |
| White Tertiary | `text-white/70` | Captions on dark bg |
| White Muted | `text-white/40` | Footer secondary |

### Status
| Token | Background | Text | Usage |
|-------|-----------|------|-------|
| Yes | `#eaf6ee` | `#166534` | Positive indicator |
| No | `#fcecec` | `#991b1b` | Negative indicator |
| Limited | `#fef3c7` | `#92400e` | Warning indicator |

### Borders & Dividers
| Token | Value | Usage |
|-------|-------|-------|
| Border Light | `#e5e7eb` | Table borders, dividers |
| Dot Inactive | `#D0D3D6` | Timeline inactive dots |
| Line Inactive | `#E0E2E5` | Timeline grey line |

## Typography

**Font Family:** Inter (via `next/font/google`)

### Scale
| Token | Size (Desktop) | Size (Mobile) | Weight | Letter Spacing | Line Height |
|-------|---------------|--------------|--------|---------------|-------------|
| Display | `100px` | `52px` | 400 | `-6px` (mobile: `-2px`) | `1.0` |
| H1 (Page) | `clamp(40px, 7vw, 80px)` | — | 400 | `-4px` (mobile: `-1.5px`) | `1.05` |
| H2 | `60px` | `36px` | 400 | `-3px` (mobile: `-1px`) | `1.1` |
| H3 | `32px` | `24px` | 500 | `-1px` (mobile: `-0.5px`) | `1.2` |
| Body Large | `18px` | `18px` | 400 | `0` | `1.6` |
| Body | `16px` | `16px` | 400 | `0` | `1.6` |
| Body Small | `14px` | `14px` | 400 | `0` | `1.55` |
| Caption/Label | `12px` | `12px` | 500 | `2px` | default |
| Button | `16px` | `16px` | 600 | `0.5px` | default |

### Caption Style
```
font-size: 12px
font-weight: 500 (Medium)
letter-spacing: 2px
text-transform: uppercase
color: #00A1E1
```

## Spacing

### Section Padding
| Token | Desktop | Mobile |
|-------|---------|--------|
| Section Y | `80px` (`py-20`) | `80px` |
| Section Y Compact | `48px` (`py-12`) | `32px` (`py-8`) |

### Container
```
max-width: 1200px
margin: 0 auto
padding: 0 24px (px-6)
```

### Common Gaps
| Token | Value | Tailwind |
|-------|-------|----------|
| xs | `4px` | `gap-1` |
| sm | `8px` | `gap-2` |
| md | `12px` | `gap-3` |
| lg | `16px` | `gap-4` |
| xl | `24px` | `gap-6` |
| 2xl | `32px` | `gap-8` |

## Border Radius

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| Button | `4px` | `rounded` | Primary/secondary buttons |
| Pill | `999px` | `rounded-full` | Pills, badges, CTA pills |
| Card | `12px` | `rounded-xl` | Image cards |
| Card Large | `16px` | `rounded-2xl` | Section cards, video clips |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| Card | `shadow-lg` | Card hover state |
| Table Row Hover | `0 0 24px rgba(0,0,0,0.08)` | Row highlight |
| Sticky Header | `0 8px 16px -4px rgba(0,0,0,0.06)` | Table sticky header |
| Timeline Dot | `0 0 0 4px white` | Dot ring on white bg |
| Timeline Dot Grey | `0 0 0 4px #F0F0F0` | Dot ring on grey bg |

## Buttons

### Primary
```
background: #00A1E1
color: white
border-radius: 4px
padding: 14px 28px
font: Inter Medium 16px, letter-spacing 0.5px
hover: background #0088be
```

### Secondary
```
border: 2px solid #323E48
color: #323E48
background: transparent
border-radius: 4px
padding: 14px 28px
hover: background #323E48, color white
```

### Dark
```
background: #323E48
color: white
```

### Outline Light
```
border: 2px solid rgba(255,255,255,0.35)
color: white
background: transparent
```

## Layout

### Breakpoints
| Token | Value | Tailwind |
|-------|-------|----------|
| sm | `640px` | `sm:` |
| md | `768px` | `md:` |
| lg | `1024px` | `lg:` |

### Widths
| Token | Value | Usage |
|-------|-------|-------|
| Page Max | `1440px` | Overall page width |
| Content Max | `1200px` | Content container |
| Container Padding | `24px` | Horizontal padding |

### Section Background Pattern
```
1. White (#FFFFFF)
2. Light Grey (#F0F0F0)
3. White (#FFFFFF)
4. (alternating...)

Exceptions:
- Services Grid: Dark Blue (#323E48)
- Search for Merch: Primary Blue (#00A1E1)
- CTA: Primary Blue (#00A1E1)
- Footer: Dark Blue (#323E48)
```

## Z-Index

| Token | Value | Usage |
|-------|-------|-------|
| Navbar | `z-50` | Sticky navbar |
| Sticky Header | `z-[20]` | Table header corner |
| Sticky Columns | `z-[15]` | Table header cells |
| Row Hover | `z-[5]` | Active table row |

## Animation

### Transitions
| Token | Value | Usage |
|-------|-------|-------|
| Color | `150ms ease` | Button/link color changes |
| Transform | `200ms ease` | Card hover lift |
| Opacity | `200ms ease` | Fade in/out |

### Icon Animation
```
Total Duration: 3.6s
Path Stagger: 0.04s per path
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### Marquee
```
@keyframes marquee-left: translateX(0) → translateX(-50%)
@keyframes marquee-right: translateX(-50%) → translateX(0)
Duration: 40s linear infinite
```

### Hover Effects
```
Cards: hover:-translate-y-1, hover:shadow-xl
Buttons: hover:opacity-85, active:scale-[0.97]
Links: hover:opacity-70
```

## Assets

| Asset | Path |
|-------|------|
| Logo (header) | `/brandmakers-logo.svg` |
| Logo (footer) | `/brandmakers-logo-footer.svg` |
| Logo (mobile) | `/brandmakers-logo2.svg` |
| Favicon (light) | `/brandmakers-logo-fav.svg` |
| Favicon (dark) | `/brandmakers-logo-fav-dark.svg` |
| Hat Bar logo | `/experiences/hatbar-white.png` |
| Service icons | `/icons/layered/bm_icons-*.svg` |
