# Dapur Utieira Backend

Strapi CMS for product data only. Homepage copy, FAQ, testimonials, contact text, navigation, CTA, and footer content remain static in the frontend.

## Setup

Use Node.js 20, 22, or 24 with the current Strapi 5 dependency range in `package.json`.

### 1. Install PostgreSQL locally

Choose one:
- PostgreSQL official Windows installer
- `winget install PostgreSQL.PostgreSQL`
- Docker, optional if you prefer containers

### 2. Create the database

Open `psql` or a PostgreSQL GUI and run:

```sql
CREATE DATABASE dapurutieira_cms;
```

Optional dedicated user:

```sql
CREATE USER dapurutieira_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE dapurutieira_cms TO dapurutieira_user;
```

For PostgreSQL 15+, grant schema permission when needed:

```sql
\c dapurutieira_cms
GRANT ALL ON SCHEMA public TO dapurutieira_user;
```

### 3. Create `.env`

```bash
cp .env.example .env
```

Fill `DATABASE_PASSWORD`, and if using the optional user, set:

```env
DATABASE_USERNAME=dapurutieira_user
```

### 4. Install dependencies

```bash
npm install
```

The backend uses PostgreSQL through `pg`. It does not use SQLite or `better-sqlite3`.

### 5. Run Strapi

```bash
npm run develop
```

Open `http://localhost:1337/admin` and create the first admin account.

## Product Content Type

The backend contains one collection type: `Product`.

Fields:
- `name`, required
- `slug`, UID from name, required
- `shortDescription`
- `fullDescription`
- `price`
- `category`
- `coverImage`, single image
- `productImages`, multiple images for 1 to 6 gallery images
- `cookingInstruction`
- `storageInstruction`
- `order`, default `0`
- `isActive`, default `true`
- `isFeatured`, default `false`

Product content is one language only. Do not enable i18n for Product.

## Create Product Entries

1. Go to Content Manager.
2. Open Product.
3. Create a product and fill in product text exactly as it should appear on the website.
4. Upload `coverImage` from Media Library.
5. Upload 1 to 6 `productImages` for the frontend detail slideshow.
6. Keep `isActive` enabled.
7. Publish the entry.

## Public API Permissions

In Strapi Admin:

1. Go to Settings.
2. Open Users & Permissions Plugin.
3. Select Roles.
4. Open Public.
5. Under Product, enable only:
   - `find`
   - optionally `findOne`
6. Do not enable create, update, delete, upload, or admin-only actions for public users.

The frontend currently only needs:

```text
GET /api/products
```

## Strapi Cloud

Deploy the `backend/` folder to Strapi Cloud. Do not commit real `.env` secrets. After deployment, copy the Strapi Cloud URL and set it in the frontend as `VITE_STRAPI_API_URL`.
