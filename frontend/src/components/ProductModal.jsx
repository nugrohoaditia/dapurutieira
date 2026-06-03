import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ProductImagePlaceholder } from "./ProductCard.jsx";
import { contactLinks } from "../data/translations.js";

export default function ProductModal({ product, language, t, onClose }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const galleryImages = useMemo(() => product?.productImages || [], [product]);
    const activeImage = galleryImages[activeImageIndex];
    const hasMultipleImages = galleryImages.length > 1;

    useEffect(() => {
        if (!product) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose, product]);

    useEffect(() => {
        setActiveImageIndex(0);
    }, [product?.id]);

    if (!product) {
        return null;
    }

    const showPreviousImage = () => {
        setActiveImageIndex((currentIndex) => (
            currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
        ));
    };

    const showNextImage = () => {
        setActiveImageIndex((currentIndex) => (
            currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
        ));
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/65 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onMouseDown={onClose}
        >
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${t.products.modalLabel}: ${product.name}`}
                className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl dark:bg-[#33363b]"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                onMouseDown={(event) => event.stopPropagation()}
            >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-bold text-emerald-600 dark:text-mint">{product.category}</p>
                                <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{product.name}</h2>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label={t.buttons.close}
                                className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-white/10 dark:text-white"
                            >
                                <X aria-hidden="true" size={18} />
                            </button>
                        </div>

                        <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                            <div className="space-y-3">
                                <div className="relative aspect-square overflow-hidden rounded-3xl bg-skysoft dark:bg-white/10">
                                    {activeImage?.url ? (
                                        <img
                                            src={activeImage.url}
                                            alt={activeImage.alternativeText || product.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <ProductImagePlaceholder label={product.name} className="rounded-3xl" />
                                    )}
                                    {hasMultipleImages && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={showPreviousImage}
                                                aria-label="Previous product image"
                                                className="focus-ring absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-slate-800 shadow-sm transition hover:bg-white dark:bg-navy/85 dark:text-white"
                                            >
                                                <ChevronLeft aria-hidden="true" size={18} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={showNextImage}
                                                aria-label="Next product image"
                                                className="focus-ring absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-slate-800 shadow-sm transition hover:bg-white dark:bg-navy/85 dark:text-white"
                                            >
                                                <ChevronRight aria-hidden="true" size={18} />
                                            </button>
                                        </>
                                    )}
                                </div>
                                {hasMultipleImages && (
                                    <div className="grid grid-cols-4 gap-2">
                                        {galleryImages.slice(0, 6).map((image, index) => (
                                            <button
                                                key={image.id || image.url}
                                                type="button"
                                                onClick={() => setActiveImageIndex(index)}
                                                aria-label={`Show product image ${index + 1}`}
                                                className={`focus-ring aspect-square overflow-hidden rounded-2xl border-2 transition ${
                                                    activeImageIndex === index ? "border-emerald-500" : "border-transparent"
                                                }`}
                                            >
                                                <img
                                                    src={image.url}
                                                    alt={image.alternativeText || product.name}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="text-xl font-black text-slate-950 dark:text-white">{product.price}</p>
                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{product.fullDescription}</p>
                                <div className="mt-5 space-y-4 rounded-3xl bg-slate-50 p-5 dark:bg-white/10">
                                    <div>
                                        <h3 className="font-black text-slate-950 dark:text-white">{t.products.cookingTitle}</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                            {product.cookingInstruction || t.products.instruction}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-slate-950 dark:text-white">{t.products.storageTitle}</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                            {product.storageInstruction || t.products.storage}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={contactLinks.whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="focus-ring mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600"
                                >
                                    {t.buttons.whatsapp}
                                </a>
                            </div>
                        </div>
            </motion.div>
        </motion.div>
    );
}
