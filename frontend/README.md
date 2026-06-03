# Dapur Utieira Frontend

React + Vite + Tailwind CSS frontend for Dapur Utieira. Static bilingual website content remains in `src/data`, while product catalog data is fetched lazily from Strapi.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
npm test
npm run build
```

## Environment

```env
VITE_STRAPI_API_URL=http://localhost:1337
```

For production on Vercel, set `VITE_STRAPI_API_URL` to the Strapi Cloud URL.

## Product Fetching

Products are fetched from Strapi only when the Products section enters the viewport. The frontend calls:

```text
GET /api/products?filters[isActive][$eq]=true&sort=order:asc&populate[coverImage]=true&populate[productImages]=true
```

The fetch is triggered once per page lifecycle, cached in React state, and is not repeated when:
- opening product detail
- using the product slideshow
- switching language
- scrolling back to the Products section

## Fallback Products

If Strapi is unavailable, returns an error, times out, or returns no active products, the frontend renders fallback products from `src/data/products.js`. This prevents the product section from going blank.

## Static Bilingual Content

These remain static in the frontend:
- Hero
- About
- FAQ
- Testimonials
- Contact CTA
- Footer
- Navigation
- Button labels

Edit bilingual static content in `src/data/translations.js`, FAQ in `src/data/faqs.js`, and testimonials in `src/data/testimonials.js`.

Product content from Strapi is one language only and appears exactly as entered in the CMS. The language switcher does not translate or refetch product content.

## API Files

- `src/api/strapiClient.js`
- `src/api/productApi.js`
- `src/api/normalizeProduct.js`
- `src/hooks/useProducts.js`

## Vercel Deployment

Use `frontend/` as the Vercel root directory.

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Set `VITE_STRAPI_API_URL` in Vercel project environment variables.
