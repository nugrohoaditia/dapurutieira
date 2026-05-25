export default function LanguageSwitcher({ language, setLanguage, label }) {
    return (
        <div
            aria-label={label}
            className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-white/10"
        >
            {["id", "en"].map((code) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    className={`focus-ring rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition ${
                        language === code
                            ? "bg-emerald-500 text-white shadow-sm"
                            : "text-slate-600 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-mint"
                    }`}
                    aria-pressed={language === code}
                >
                    {code}
                </button>
            ))}
        </div>
    );
}
