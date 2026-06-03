const DEFAULT_STRAPI_URL = "http://localhost:1337";

export function getStrapiBaseUrl() {
    const configuredUrl = typeof __STRAPI_API_URL__ !== "undefined" ? __STRAPI_API_URL__ : DEFAULT_STRAPI_URL;
    return configuredUrl.replace(/\/$/, "");
}

export function buildStrapiUrl(path, params) {
    const url = new URL(`${getStrapiBaseUrl()}${path}`);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.set(key, value);
            }
        });
    }

    return url.toString();
}

export async function strapiGet(path, params, { timeoutMs = 8000 } = {}) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(buildStrapiUrl(path, params), {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(`Strapi request failed with status ${response.status}`);
        }

        return await response.json();
    } finally {
        window.clearTimeout(timeoutId);
    }
}
