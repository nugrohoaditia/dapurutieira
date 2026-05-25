import { Check, Flame, MessageCircle, PackageCheck, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper.jsx";

const icons = [ShoppingBag, MessageCircle, Check, PackageCheck, Flame];

export default function HowItWorks({ t }) {
    return (
        <SectionWrapper id="how-it-works" className="bg-white dark:bg-[#33363b]">
            <div className="container-shell">
                <div className="max-w-3xl">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-mint">{t.howItWorks.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl dark:text-white">{t.howItWorks.title}</h2>
                </div>
                <div className="mt-10 grid gap-5 md:grid-cols-5">
                    {t.howItWorks.steps.map((step, index) => {
                        const Icon = icons[index];

                        return (
                            <motion.article
                                key={step.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                className="rounded-3xl border border-slate-100 bg-slate-50 p-5 shadow-sm dark:border-white/10 dark:bg-white/10"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                                    <Icon aria-hidden="true" size={21} />
                                </div>
                                <p className="mt-5 text-sm font-black text-emerald-700 dark:text-mint">{String(index + 1).padStart(2, "0")}</p>
                                <h3 className="mt-2 text-base font-black text-slate-950 dark:text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
