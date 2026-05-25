import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ theme, onToggle, label }) {
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            aria-label={label}
            onClick={onToggle}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:text-mint"
        >
            {isDark ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
        </button>
    );
}
