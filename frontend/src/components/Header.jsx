import { Menu, X } from "lucide-react";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { navItems } from "../data/translations.js";

export default function Header({ t, language, setLanguage, theme, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderLinks = (isMobile = false) => (
        navItems.map((item) => (
            <a
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`focus-ring rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-mint ${
                    isMobile ? "block" : ""
                }`}
            >
                {t.nav[item.key]}
            </a>
        ))
    );

    return (
        <header className="sticky top-0 z-40 border-b border-white/70 bg-white/85 shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-navy/85">
            <div className="container-shell flex h-20 items-center justify-between gap-4">
                <a href="#home" className="focus-ring flex items-center gap-3 rounded-2xl">
                    <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-emerald-100 bg-skysoft shadow-soft">
                        <img src="/logo-dapur-utieira.jpg" alt="" className="h-11 w-11 object-contain" />
                    </span>
                    <span>
                        <span className="block text-base font-black text-slate-950 dark:text-white">{t.meta.company}</span>
                        <span className="block text-xs font-medium text-slate-500 dark:text-slate-300">{t.meta.tagline}</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
                    {renderLinks()}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <LanguageSwitcher language={language} setLanguage={setLanguage} label={t.toggles.language} />
                    <DarkModeToggle theme={theme} onToggle={toggleTheme} label={t.toggles.theme} />
                </div>

                <button
                    type="button"
                    aria-label={isOpen ? t.toggles.closeMenu : t.toggles.openMenu}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((current) => !current)}
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                    {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-2 lg:hidden dark:border-white/10 dark:bg-navy">
                    <nav className="grid gap-1" aria-label="Mobile navigation">
                        {renderLinks(true)}
                    </nav>
                    <div className="mt-4 flex items-center gap-3">
                        <LanguageSwitcher language={language} setLanguage={setLanguage} label={t.toggles.language} />
                        <DarkModeToggle theme={theme} onToggle={toggleTheme} label={t.toggles.theme} />
                    </div>
                </div>
            )}
        </header>
    );
}
