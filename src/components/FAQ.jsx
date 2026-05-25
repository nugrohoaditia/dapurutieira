import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/faqs.js";
import SectionWrapper from "./SectionWrapper.jsx";

export default function FAQ({ language, t }) {
    const [openId, setOpenId] = useState(null);

    return (
        <SectionWrapper id="faq" className="bg-slate-50 dark:bg-navy">
            <div className="container-shell max-w-4xl">
                <div className="text-center">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-mint">{t.faq.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl dark:text-white">{t.faq.title}</h2>
                </div>
                <div className="mt-10 space-y-4">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <article key={faq.id} className="rounded-3xl border border-slate-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/10">
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                                    className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left"
                                >
                                    <span className="font-black text-slate-950 dark:text-white">{faq.question[language]}</span>
                                    <ChevronDown
                                        aria-hidden="true"
                                        className={`shrink-0 text-emerald-500 transition ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-6 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer[language]}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </article>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
