import { Clock, Snowflake, Users, Heart, ShieldCheck, Utensils } from "lucide-react";
import SectionWrapper from "./SectionWrapper.jsx";

const icons = [Clock, Snowflake, Users, Heart, ShieldCheck, Utensils];

export default function Benefits({ t }) {
    return (
        <SectionWrapper id="benefits" className="bg-skysoft dark:bg-navy">
            <div className="container-shell">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-mint">{t.benefits.eyebrow}</p>
                        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl dark:text-white">{t.benefits.title}</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {t.benefits.items.map((item, index) => {
                            const Icon = icons[index];

                            return (
                                <article key={item} className="rounded-3xl border border-white bg-white/75 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/10">
                                    <Icon aria-hidden="true" className="mb-4 text-emerald-500" size={24} />
                                    <h3 className="text-base font-black text-slate-950 dark:text-white">{item}</h3>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
