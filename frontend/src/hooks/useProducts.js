import { useCallback, useRef, useState } from "react";
import { fetchProducts } from "../api/productApi.js";
import { products as fallbackProducts } from "../data/products.js";

function valueForDefaultLanguage(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
        return value.id || value.en || "";
    }

    return value || "";
}

function normalizeFallbackProducts() {
    return fallbackProducts.map((product) => {
        const coverImageUrl = product.image || "";

        return {
            id: product.id,
            name: valueForDefaultLanguage(product.name),
            slug: product.slug || `product-${product.id}`,
            shortDescription: valueForDefaultLanguage(product.description),
            fullDescription: valueForDefaultLanguage(product.fullDescription) || valueForDefaultLanguage(product.description),
            price: product.price || "",
            category: valueForDefaultLanguage(product.category),
            cookingInstruction: "",
            storageInstruction: "",
            order: product.id,
            isActive: true,
            isFeatured: false,
            coverImageUrl,
            productImages: coverImageUrl
                ? [{
                    id: `${product.id}-cover`,
                    url: coverImageUrl,
                    alternativeText: valueForDefaultLanguage(product.name),
                    width: null,
                    height: null
                }]
                : []
        };
    });
}

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isUsingFallback, setIsUsingFallback] = useState(false);
    const hasFetchedRef = useRef(false);
    const inFlightRef = useRef(false);

    const loadProducts = useCallback(async () => {
        if (hasFetchedRef.current || inFlightRef.current) {
            return;
        }

        hasFetchedRef.current = true;
        inFlightRef.current = true;
        setLoading(true);
        setError(null);

        try {
            const cmsProducts = await fetchProducts();

            if (!cmsProducts.length) {
                throw new Error("No active products returned from Strapi");
            }

            setProducts(cmsProducts);
            setIsUsingFallback(false);
        } catch (nextError) {
            setProducts(normalizeFallbackProducts());
            setError(nextError);
            setIsUsingFallback(true);
        } finally {
            setLoading(false);
            inFlightRef.current = false;
        }
    }, []);

    return {
        products,
        loading,
        error,
        isUsingFallback,
        loadProducts,
        hasFetched: hasFetchedRef.current
    };
}
