import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials.js";
import SectionWrapper from "./SectionWrapper.jsx";

export default function Testimonials({ language, t }) {
    return (
        <SectionWrapper id="testimonials" className="bg-white dark:bg-[#33363b]">
            <div className="container-shell">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-mint">{t.testimonials.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl dark:text-white">{t.testimonials.title}</h2>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/10"
                        >
                            <div className="flex gap-1" aria-label={`${item.rating} ${t.testimonials.ratingLabel}`}>
                                {Array.from({ length: item.rating }, (_, starIndex) => (
                                    <Star key={starIndex} aria-hidden="true" size={18} className="fill-emerald-400 text-emerald-400" />
                                ))}
                            </div>
                            <blockquote className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-200">
                                "{item.quote[language]}"
                            </blockquote>
                            <div className="mt-6">
                                <p className="font-black text-slate-950 dark:text-white">{item.name}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-300">{item.role[language]}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
