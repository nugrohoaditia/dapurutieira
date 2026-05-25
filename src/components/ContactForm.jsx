import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import { contactLinks } from "../data/translations.js";
import SectionWrapper from "./SectionWrapper.jsx";

export default function ContactForm({ t }) {
    return (
        <SectionWrapper id="contact" className="bg-white dark:bg-[#2f3338]">
            <div className="container-shell">
                <div className="mx-auto max-w-4xl rounded-[2rem] border border-emerald-100 bg-skysoft p-6 text-center shadow-soft sm:p-10 dark:border-white/10 dark:bg-white/10">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-mint">{t.contact.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl dark:text-white">
                        {t.contact.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-200">
                        {t.contact.description}
                    </p>

                    <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-white/80 p-5 text-left shadow-sm dark:bg-white/10">
                        <h3 className="text-xl font-black text-slate-950 dark:text-white">{t.contact.whatsappTitle}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {t.contact.whatsappDescription}
                        </p>
                        <a
                            href={contactLinks.whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-600 sm:w-auto"
                        >
                            <MessageCircle aria-hidden="true" size={20} />
                            {t.buttons.whatsapp}: {contactLinks.whatsappDisplay}
                        </a>
                    </div>

                    <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
                        <p className="rounded-2xl bg-white/70 p-4 text-sm text-slate-700 dark:bg-white/10 dark:text-slate-300">
                            <MapPin aria-hidden="true" className="mb-2 text-emerald-500" size={19} />
                            <strong className="block text-slate-950 dark:text-white">{t.contact.addressLabel}</strong>
                            {t.contact.address}
                        </p>
                        <p className="rounded-2xl bg-white/70 p-4 text-sm text-slate-700 dark:bg-white/10 dark:text-slate-300">
                            <Clock aria-hidden="true" className="mb-2 text-emerald-500" size={19} />
                            <strong className="block text-slate-950 dark:text-white">{t.contact.hoursLabel}</strong>
                            {t.contact.hours}
                        </p>
                        <a
                            href={contactLinks.instagramUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="focus-ring rounded-2xl bg-white/70 p-4 text-sm font-bold text-slate-700 transition hover:text-emerald-700 dark:bg-white/10 dark:text-slate-300 dark:hover:text-mint"
                        >
                            <Instagram aria-hidden="true" className="mb-2 text-emerald-500" size={19} />
                            <strong className="block text-slate-950 dark:text-white">{t.contact.instagramLabel}</strong>
                            {contactLinks.instagram}
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
