import { Instagram, MessageCircle } from "lucide-react";
import { contactLinks, navItems } from "../data/translations.js";

export default function Footer({ t }) {
    return (
        <footer className="bg-navy py-12 text-white">
            <div className="container-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
                <div>
                    <a href="#home" className="focus-ring inline-flex items-center gap-3 rounded-2xl">
                        <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-skysoft">
                            <img src="/logo-dapur-utieira.webp" alt="" className="h-11 w-11 object-contain" />
                        </span>
                        <span>
                            <span className="block font-black">{t.meta.company}</span>
                            <span className="block text-sm text-slate-300">{t.meta.tagline}</span>
                        </span>
                    </a>
                    <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">{t.meta.description}</p>
                </div>
                <div>
                    <h2 className="font-black">{t.footer.quickLinks}</h2>
                    <nav className="mt-4 grid gap-2" aria-label={t.footer.quickLinks}>
                        {navItems.map((item) => (
                            <a key={item.key} href={item.href} className="focus-ring rounded-lg text-sm text-slate-300 transition hover:text-mint">
                                {t.nav[item.key]}
                            </a>
                        ))}
                    </nav>
                </div>
                <div>
                    <h2 className="font-black">{t.footer.contactInfo}</h2>
                    <div className="mt-4 grid gap-3 text-sm text-slate-300">
                        <a href={contactLinks.whatsappUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-lg transition hover:text-mint">
                            <MessageCircle aria-hidden="true" size={17} />
                            {contactLinks.whatsappDisplay}
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="font-black">{t.footer.social}</h2>
                    <a href={contactLinks.instagramUrl} target="_blank" rel="noreferrer" className="focus-ring mt-4 inline-flex items-center gap-2 rounded-lg text-sm text-slate-300 transition hover:text-mint">
                        <Instagram aria-hidden="true" size={17} />
                        {contactLinks.instagram}
                    </a>
                </div>
            </div>
            <div className="container-shell mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
                &copy; {new Date().getFullYear()} {t.meta.company}. {t.footer.copyright}
            </div>
        </footer>
    );
}

