import { normalizeProductResponse } from "./normalizeProduct.js";
import { strapiGet } from "./strapiClient.js";

const productQuery = {
    "filters[isActive][$eq]": "true",
    "sort": "order:asc",
    "populate[coverImage]": "true",
    "populate[productImages]": "true"
};

export async function fetchProducts() {
    const response = await strapiGet("/api/products", productQuery);
    return normalizeProductResponse(response);
}
