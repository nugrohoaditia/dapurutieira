import { motion } from "framer-motion";
import { ImageIcon, X } from "lucide-react";
import { useEffect } from "react";
import { contactLinks } from "../data/translations.js";

export default function ProductModal({ product, language, t, onClose }) {
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

    if (!product) {
        return null;
    }

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
                aria-label={`${t.products.modalLabel}: ${product.name[language]}`}
                className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl dark:bg-[#33363b]"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                onMouseDown={(event) => event.stopPropagation()}
            >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-bold text-emerald-600 dark:text-mint">{product.category[language]}</p>
                                <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{product.name[language]}</h2>
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
                            <div className="grid aspect-square place-items-center rounded-3xl bg-skysoft dark:bg-white/10">
                                <div className="text-center">
                                    <ImageIcon aria-hidden="true" className="mx-auto mb-4 text-emerald-500" size={46} />
                                    <p className="font-black text-slate-700 dark:text-slate-200">{product.name[language]}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-black text-slate-950 dark:text-white">{product.price}</p>
                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{product.fullDescription[language]}</p>
                                <div className="mt-5 space-y-4 rounded-3xl bg-slate-50 p-5 dark:bg-white/10">
                                    <div>
                                        <h3 className="font-black text-slate-950 dark:text-white">{t.products.cookingTitle}</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{t.products.instruction}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-slate-950 dark:text-white">{t.products.storageTitle}</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{t.products.storage}</p>
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
