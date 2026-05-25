import { motion } from "framer-motion";
import { CheckCircle2, PackageCheck, Snowflake, Truck } from "lucide-react";

const badgeIcons = [CheckCircle2, Snowflake, PackageCheck, Truck];

export default function Hero({ t }) {
    return (
        <section id="home" className="relative overflow-hidden bg-skysoft pt-12 dark:bg-navy">
            <div className="container-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                >
                    <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm dark:border-mint/30 dark:bg-white/10 dark:text-mint">
                        {t.meta.tagline}
                    </p>
                    <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                        {t.hero.headline}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        {t.hero.subheadline}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <motion.a
                            href="#contact"
                            whileHover={{ y: -2, scale: 1.01 }}
                            className="focus-ring inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-emerald-600"
                        >
                            {t.buttons.orderNow}
                        </motion.a>
                        <motion.a
                            href="#products"
                            whileHover={{ y: -2, scale: 1.01 }}
                            className="focus-ring inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-bold text-emerald-800 shadow-sm transition hover:border-emerald-400 dark:border-white/15 dark:bg-white/10 dark:text-white"
                        >
                            {t.buttons.viewProducts}
                        </motion.a>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {t.hero.badges.map((badge, index) => {
                            const Icon = badgeIcons[index];

                            return (
                                <motion.div
                                    key={badge}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 + index * 0.08 }}
                                    className="rounded-2xl border border-white bg-white/70 p-3 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                                >
                                    <Icon aria-hidden="true" className="mb-2 text-emerald-500" size={18} />
                                    {badge}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="relative"
                >
                    <div className="aspect-[4/3] rounded-[2rem] border border-white bg-white/80 p-5 shadow-soft dark:border-white/10 dark:bg-white/10">
                        <div
                            role="img"
                            aria-label={t.hero.imageAlt}
                            className="grid h-full place-items-center rounded-[1.5rem] bg-[linear-gradient(145deg,#fffaf0,#fff1bd_55%,#ffe0a1)] p-5 text-center dark:bg-[linear-gradient(145deg,#4a4d52,#33363b_55%,#633100)]"
                        >
                            <div className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-soft dark:border-white/10 dark:bg-white/10">
                                <img
                                    src="/logo-dapur-utieira.jpg"
                                    alt={t.hero.imageAlt}
                                    className="mx-auto max-h-[410px] w-full max-w-md object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
