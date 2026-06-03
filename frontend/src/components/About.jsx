import { Leaf, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import SectionWrapper from "./SectionWrapper.jsx";

const icons = [Leaf, Sparkles, ShieldCheck, TimerReset];

export default function About({ t }) {
    return (
        <SectionWrapper id="about" className="bg-white dark:bg-[#33363b]">
            <div className="container-shell">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-mint">{t.about.eyebrow}</p>
                        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl dark:text-white">{t.about.title}</h2>
                        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{t.about.body}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {t.about.values.map((value, index) => {
                            const Icon = icons[index];

                            return (
                                <article key={value.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/10">
                                    <Icon aria-hidden="true" className="mb-5 text-emerald-500" size={28} />
                                    <h3 className="text-lg font-black text-slate-950 dark:text-white">{value.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{value.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
