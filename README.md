# Mill Creek UI

A React component library built for the Mill Creek Bakery headless WordPress portfolio project. Designed and documented in Storybook, published to npm, and consumed by the Next.js frontend.

## Live Demo

See the components in action: **[bakery.tonyschappaugh.com](https://bakery.tonyschappaugh.com)**

The bakery frontend is built entirely with this library. Every page layout, navigation element, card, and interactive filter runs through these components.

## Skills Demonstrated

### TypeScript / React Component Architecture
- **Strict TypeScript throughout** — no `any` types, all props fully typed with interfaces
- **Variant-driven styling** using `Record<Variant, string>` lookup maps instead of conditional chains (see `Badge`, `Card`, `Button`)
- **Composition over configuration** — complex surfaces like `Nav` and `Footer` accept `ReactNode` slots (`logo`, `cta`) rather than prescribing internal structure
- **Discriminated prop types** for mutually dependent fields (e.g. `ContentHeader` level drives both the heading tag and its type scale)
- **Forwarded class merging** with `className` escape hatches on all layout-bearing components, preserving composability in the consuming app
- **React hooks for behavior** — `Nav` uses `useState` + `useEffect` to derive scroll-aware height, mobile menu open state, and body overflow lock without any external state library

### Library Packaging
- **Vite library mode** — dual output: ESM (`dist/mill-creek-ui.js`) and CJS (`dist/mill-creek-ui.umd.cjs`) for broad consumer compatibility
- **`vite-plugin-dts`** generates `.d.ts` declarations from `tsconfig.build.json` so consumers get full type inference
- **`package.json` exports map** with separate `types`, `import`, and `require` conditions
- **React in `peerDependencies`** — consumers supply their own React instance; no version conflicts
- **Single `src/index.ts` entry point** — explicit named exports prevent tree-shaking surprises and keep the public API intentional

### Tailwind v4
- **Design tokens as CSS custom properties** — brand palette, surface hierarchy, and text scale defined once and referenced throughout
- **Utility composition** — complex multi-state styles (hover, active, focus-visible, disabled) are built from utilities and joined with arrays for readability, never with `@apply`
- **Responsive variants** — `Nav` and `Hero` use breakpoint prefixes to switch between mobile and desktop layouts without duplicate markup
- **No custom CSS** — every visual style is expressed in Tailwind utilities; zero hand-written stylesheets in the library

### Accessibility (WCAG 2.2 / Section 508)
- **Semantic HTML** — `<header>`, `<nav>`, `<footer>` elements used correctly; headings use the appropriate level (`h1`/`h2`) passed as a prop
- **`aria-label` on all navigation regions** — desktop nav, mobile nav, and footer nav each carry distinct labels for screen readers
- **`aria-expanded` + `aria-controls`** on the mobile menu toggle — associates the button with the panel it opens
- **`focus-visible` outlines** on every interactive element, using brand-appropriate colors per background context
- **`disabled` state** handled natively on `<button>` with `disabled:opacity-40 disabled:cursor-not-allowed` — no ARIA workarounds needed
- **Social icon links** use `aria-label` to provide meaningful link text beyond the SVG

### Component Design System
- **Two-typeface system** — Cormorant Garamond (display) and Source Sans 3 (body/UI) applied consistently through font utilities
- **Surface hierarchy** — `mill-background`, `mill-surface`, `mill-text-primary` tokens create depth without arbitrary color values
- **Brand token separation** — `mill-brand-dark`, `mill-brand-darker`, `mill-brand-darkest` give Button and link states a structured interactive scale
- **Scroll-aware Nav** — header height animates from `h-24` to `h-16` on scroll, logo swaps between a primary large mark and a compact one

## Components

| Component | Description |
|-----------|-------------|
| `Badge` | Category label with `default`, `featured`, and `subtle` variants |
| `Button` | CTA button with `light` and `dark` background variants, optional icon slot |
| `Card` | Content card with `default`, `minimal`, and `featured` (horizontal) layout variants |
| `ContentHeader` | Page/section heading block with `h1`/`h2` level, optional subtext, and body copy |
| `FilterBar` | Category filter row built from `Pill` toggles with ARIA group labeling |
| `Footer` | Responsive footer with logo slot, nav links, social icons, and copyright |
| `Hero` | Full-bleed image hero with gradient overlay, headline, subhead, body, and optional CTA slot |
| `Nav` | Sticky header with scroll-aware sizing, mobile hamburger menu, and logo/CTA slots |
| `Panel` | Surface container with border and background token |
| `Pill` | Toggle pill used in `FilterBar` for active/inactive filter states |
| `Separator` | Horizontal rule using border tokens |

## Icons

SVG icon components exported for use in consuming apps:

`ArrowUpRight`, `Close`, `Facebook`, `Funnel`, `Hamburger`, `Instagram`, `Pinterest`

## Installation

```bash
npm install @tschappaugh/mill-creek-ui
```

React 19 is a peer dependency — install it separately if not already present:

```bash
npm install react react-dom
```

## Usage

```tsx
import { Button, Card, Nav } from '@tschappaugh/mill-creek-ui'

// Render a button
<Button background="light" icon={<ArrowUpRight />}>
  Order Now
</Button>

// Render a card
<Card
  title="Sourdough Miche"
  tag="Sourdough"
  image={{ src: '/images/miche.jpg', alt: 'Sourdough Miche' }}
  href="/breads/sourdough-miche"
  excerpt="A classic open-crumb country loaf."
/>
```

> **Note:** This library requires Tailwind v4 with the Mill Creek design token CSS loaded in the consuming app. Tokens are defined in the bakery frontend's global stylesheet and are not bundled with the library.

## Local Development

```bash
git clone https://github.com/tschappaugh/mill-creek-ui
cd mill-creek-ui
npm install
npm run storybook     # component development at localhost:6006
npm run build         # build dist/ for publishing
```

## Publish Workflow

```bash
npm whoami            # verify logged in as tschappaugh
npm version patch     # bump version e.g. 0.1.3 → 0.1.4
npm run build
npm publish --access public
```

## File Structure

```
mill-creek-ui/
├── src/
│   ├── components/
│   │   ├── Badge/               # Badge component + Storybook stories
│   │   ├── Button/              # Button component + Storybook stories
│   │   ├── Card/                # Card component + Storybook stories
│   │   ├── ContentHeader/       # ContentHeader component + Storybook stories
│   │   ├── FilterBar/           # FilterBar component + Storybook stories
│   │   ├── Footer/              # Footer component + Storybook stories
│   │   ├── Hero/                # Hero component + Storybook stories
│   │   ├── Nav/                 # Nav component + Storybook stories
│   │   ├── Panel/               # Panel component + Storybook stories
│   │   ├── Pill/                # Pill component + Storybook stories
│   │   └── Separator/           # Separator component + Storybook stories
│   ├── icons/                   # SVG icon components
│   └── index.ts                 # Library entry point — all public exports
├── dist/                        # Compiled output (auto-generated)
├── vite.config.ts               # Vite library build config
└── tsconfig.build.json          # TypeScript config for declaration emit
```

## License

MIT
