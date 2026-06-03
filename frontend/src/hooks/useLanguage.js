import { useEffect, useState } from "react";

const LANGUAGE_KEY = "rumah-beku-language";
const supportedLanguages = ["id", "en"];

export function useLanguage() {
    const [language, setLanguageState] = useState(() => {
        if (typeof window === "undefined") {
            return "id";
        }

        const storedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
        return supportedLanguages.includes(storedLanguage) ? storedLanguage : "id";
    });

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (value) => {
        setLanguageState(supportedLanguages.includes(value) ? value : "id");
    };

    return { language, setLanguage };
}

export { LANGUAGE_KEY };
