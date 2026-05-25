# Dapur Utieira Company Profile

A professional one-page bilingual company profile website for a home-based frozen food business. The site is built with React, Vite, Tailwind CSS, Framer Motion, Jest, and React Testing Library.

## Features

- Indonesian and English language switcher with `localStorage` persistence
- Light and dark mode with system preference fallback and `localStorage` persistence
- Sticky responsive navigation with mobile menu
- Hero, About, Products, How It Works, Benefits, Testimonials, FAQ, Contact, and Footer sections
- Nine editable static product cards with bilingual names and descriptions
- Accessible product detail modal with WhatsApp CTA
- FAQ accordion animation
- WhatsApp-only contact CTA for fast ordering
- Framer Motion section, card, button, and modal animations
- SEO-friendly page title, meta description, and semantic section structure
- Jest and React Testing Library unit tests

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Jest
- React Testing Library

## Folder Structure

```text
food-company-profile/
|-- public/
|   |-- images/
|   |-- favicon.svg
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   |-- index.css
|   |-- data/
|   |-- hooks/
|   |-- components/
|   |-- tests/
|-- package.json
|-- vite.config.js
|-- tailwind.config.js
|-- postcss.config.js
|-- README.md
```

## Local Setup

```bash
npm install
npm run dev
npm test
npm run build
```

## Scripts

- `npm run dev` starts the Vite development server
- `npm test` runs Jest once
- `npm run test:watch` runs Jest in watch mode
- `npm run build` creates the production build
- `npm run preview` previews the production build

## Edit Product Data

Product data lives in `src/data/products.js`. Each product supports bilingual content:

```js
{
    name: {
        id: "Ayam Gule",
        en: "Gulai Chicken"
    },
    description: {
        id: "Deskripsi produk.",
        en: "Product description."
    }
}
```

Replace placeholder names, descriptions, categories, prices, and optional image paths there.

## Edit Bilingual Content

All main website copy lives in `src/data/translations.js`. Edit the `id` object for Indonesian and the `en` object for English. This includes navigation, buttons, sections, WhatsApp contact copy, and footer text.

## Contact Customization

Update WhatsApp and Instagram values in `src/data/translations.js` inside `contactLinks`:

```js
export const contactLinks = {
    whatsappDisplay: "0812-8182-2881",
    whatsappUrl: "https://wa.me/6281281822881",
    instagram: "@dapurutieira"
};
```

## Images

The product grid uses neutral in-card placeholders so the project does not depend on paid or external assets. To use real images later, add files under `public/images/` and update the `image` path in `src/data/products.js`.
