import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

export function ProductImagePlaceholder({ label, className = "" }) {
    return (
        <div className={`grid h-full w-full place-items-center rounded-2xl border border-dashed border-emerald-200 bg-white/70 px-2 text-center dark:border-mint/30 dark:bg-white/10 ${className}`}>
            <div>
                <ImageIcon aria-hidden="true" className="mx-auto mb-2 text-emerald-500 sm:mb-3" size={28} />
                <span className="text-xs font-bold text-slate-500 sm:text-sm dark:text-slate-300">{label}</span>
            </div>
        </div>
    );
}

export function ProductCardSkeleton() {
    return (
        <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm sm:rounded-3xl dark:border-white/10 dark:bg-white/10">
            <div className="aspect-square animate-pulse bg-emerald-100/70 sm:aspect-[4/3] dark:bg-white/10" />
            <div className="space-y-3 p-3 sm:p-6">
                <div className="h-4 w-20 rounded-full bg-slate-200 dark:bg-white/10" />
                <div className="h-5 w-3/4 rounded-full bg-slate-200 dark:bg-white/10" />
                <div className="h-16 rounded-2xl bg-slate-100 dark:bg-white/10" />
                <div className="h-9 rounded-full bg-emerald-200 dark:bg-white/10" />
            </div>
        </article>
    );
}

export default function ProductCard({ product, t, onViewDetails }) {
    return (
        <motion.article
            data-testid="product-card"
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
            }}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:rounded-3xl dark:border-white/10 dark:bg-white/10"
        >
            <div className="grid aspect-square place-items-center bg-skysoft p-3 sm:aspect-[4/3] sm:p-5 dark:bg-[#3b3f45]">
                {product.coverImageUrl ? (
                    <img
                        src={product.coverImageUrl}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full rounded-2xl object-cover"
                    />
                ) : (
                    <ProductImagePlaceholder label={product.name} />
                )}
            </div>
            <div className="p-3 sm:p-6">
                <div className="grid gap-2 sm:flex sm:items-center sm:justify-between sm:gap-3">
                    <span className="w-fit rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 sm:text-xs dark:bg-mint/10 dark:text-mint">
                        {product.category}
                    </span>
                    <span className="text-xs font-black text-slate-950 sm:text-sm dark:text-white">{product.price}</span>
                </div>
                <h3 className="mt-3 text-sm font-black leading-snug text-slate-950 sm:mt-4 sm:text-xl dark:text-white">{product.name}</h3>
                <p className="mt-2 line-clamp-3 min-h-16 text-xs leading-5 text-slate-600 sm:mt-3 sm:min-h-20 sm:text-sm sm:leading-6 dark:text-slate-300">
                    {product.shortDescription}
                </p>
                <div className="mt-4 sm:mt-5">
                    <button
                        type="button"
                        onClick={() => onViewDetails(product)}
                        className="focus-ring w-full rounded-full bg-emerald-500 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-600 sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                        {t.buttons.viewDetails}
                    </button>
                </div>
            </div>
        </motion.article>
    );
}
