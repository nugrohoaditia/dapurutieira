import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useProducts } from "../hooks/useProducts.js";
import ProductCard, { ProductCardSkeleton } from "./ProductCard.jsx";
import ProductModal from "./ProductModal.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

export default function Products({ language, t }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -20% 0px" });
    const { products, loading, error, isUsingFallback, loadProducts, hasFetched } = useProducts();

    useEffect(() => {
        if (isInView) {
            loadProducts();
        }
    }, [isInView, loadProducts]);

    return (
        <SectionWrapper id="products" className="bg-slate-50 dark:bg-navy">
            <div ref={sectionRef} className="container-shell">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-mint">{t.products.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl dark:text-white">{t.products.title}</h2>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{t.products.description}</p>
                    {isUsingFallback && error && (
                        <p role="status" className="mt-4 text-sm font-semibold text-emerald-700 dark:text-mint">
                            {t.products.fallbackNotice}
                        </p>
                    )}
                </div>
                <motion.div
                    className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                >
                    {loading && Array.from({ length: 6 }, (_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}

                    {!loading && products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            t={t}
                            onViewDetails={setSelectedProduct}
                        />
                    ))}
                </motion.div>
                {!loading && hasFetched && products.length === 0 && (
                    <div className="mt-10 rounded-3xl border border-dashed border-emerald-200 bg-white p-8 text-center text-slate-600 dark:border-white/15 dark:bg-white/10 dark:text-slate-300">
                        {t.products.empty}
                    </div>
                )}
            </div>
            <ProductModal product={selectedProduct} language={language} t={t} onClose={() => setSelectedProduct(null)} />
        </SectionWrapper>
    );
}
