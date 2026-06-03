# Dapur Utieira Monorepo

This repository is organized as a monorepo with a React frontend and a Strapi backend.

## Structure

```text
dapurutieira/
|-- frontend/
|   |-- React + Vite + Tailwind website
|-- backend/
|   |-- Strapi CMS for Product content only
|-- README.md
|-- .gitignore
```

## Frontend

The frontend lives in `frontend/` and is intended for Vercel deployment.

```bash
cd frontend
npm install
npm run dev
npm test
npm run build
```

Set:

```env
VITE_STRAPI_API_URL=http://localhost:1337
```

In production, point it to the Strapi Cloud backend URL.

## Backend

The backend lives in `backend/` and is intended for Strapi Cloud deployment.

```bash
cd backend
npm install
cp .env.example .env
npm run develop
```

The backend uses PostgreSQL for local development and the `pg` driver. It does not use SQLite or `better-sqlite3`.

Use Node.js 20, 22, or 24 with the current Strapi 5 dependency range.

The CMS manages only Product content.

## Content Ownership

Managed in Strapi:
- Products
- Product cover image
- Product gallery images
- Product price/category/instructions

Kept static in frontend data files:
- Hero
- About
- FAQ
- Testimonials
- Contact CTA
- Footer
- Navigation
- General bilingual wording

Products are one language only and are displayed exactly as entered in Strapi. The frontend language switcher affects only static frontend wording.

## Product Loading

The frontend fetches products from Strapi only when the Products section enters the viewport. It fetches once per page lifecycle and caches the result in React state.

If Strapi fails, times out, is unavailable, or returns no active products, the frontend displays fallback products from `frontend/src/data/products.js`.

## Deployment Plan

- Deploy `frontend/` to Vercel.
- Deploy `backend/` to Strapi Cloud.
- Configure Vercel `VITE_STRAPI_API_URL` with the Strapi Cloud URL.
