import { motion } from "framer-motion";
import { useState } from "react";
import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import ProductModal from "./ProductModal.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

export default function Products({ language, t }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <SectionWrapper id="products" className="bg-slate-50 dark:bg-navy">
            <div className="container-shell">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-mint">{t.products.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl dark:text-white">{t.products.title}</h2>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{t.products.description}</p>
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
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            language={language}
                            t={t}
                            onViewDetails={setSelectedProduct}
                        />
                    ))}
                </motion.div>
            </div>
            <ProductModal product={selectedProduct} language={language} t={t} onClose={() => setSelectedProduct(null)} />
        </SectionWrapper>
    );
}
