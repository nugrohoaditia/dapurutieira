import { getStrapiBaseUrl } from "./strapiClient.js";

function getAttributes(entity) {
    return entity?.attributes ? entity.attributes : entity || {};
}

function absoluteMediaUrl(url) {
    if (!url) {
        return "";
    }

    if (/^https?:\/\//i.test(url)) {
        return url;
    }

    return `${getStrapiBaseUrl()}${url.startsWith("/") ? url : `/${url}`}`;
}

function normalizeMedia(media) {
    const mediaEntity = media?.data || media;
    const attributes = getAttributes(mediaEntity);
    const url = attributes?.url || mediaEntity?.url;

    if (!url) {
        return null;
    }

    return {
        id: mediaEntity?.id || attributes?.id || url,
        url: absoluteMediaUrl(url),
        alternativeText: attributes?.alternativeText || mediaEntity?.alternativeText || "",
        width: attributes?.width || mediaEntity?.width || null,
        height: attributes?.height || mediaEntity?.height || null
    };
}

function normalizeMediaList(media) {
    const list = Array.isArray(media?.data) ? media.data : Array.isArray(media) ? media : media ? [media] : [];
    return list.map(normalizeMedia).filter(Boolean);
}

export function normalizeProduct(entity) {
    const attributes = getAttributes(entity);
    const coverImage = normalizeMedia(attributes.coverImage);
    const productImages = normalizeMediaList(attributes.productImages);
    const gallery = productImages.length > 0 ? productImages : coverImage ? [coverImage] : [];

    return {
        id: entity?.id || attributes.id || attributes.slug || attributes.name,
        name: attributes.name || "",
        slug: attributes.slug || "",
        shortDescription: attributes.shortDescription || "",
        fullDescription: attributes.fullDescription || attributes.shortDescription || "",
        price: attributes.price || "",
        category: attributes.category || "",
        cookingInstruction: attributes.cookingInstruction || "",
        storageInstruction: attributes.storageInstruction || "",
        order: Number(attributes.order || 0),
        isActive: attributes.isActive !== false,
        isFeatured: Boolean(attributes.isFeatured),
        coverImageUrl: coverImage?.url || gallery[0]?.url || "",
        productImages: gallery
    };
}

export function normalizeProductResponse(response) {
    const data = Array.isArray(response?.data) ? response.data : [];
    return data.map(normalizeProduct).filter((product) => product.name);
}
