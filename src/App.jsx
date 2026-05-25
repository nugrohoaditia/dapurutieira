import About from "./components/About.jsx";
import Benefits from "./components/Benefits.jsx";
import ContactForm from "./components/ContactForm.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Products from "./components/Products.jsx";
import Testimonials from "./components/Testimonials.jsx";
import { translations } from "./data/translations.js";
import { useLanguage } from "./hooks/useLanguage.js";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
    const { language, setLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const t = translations[language];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-navy dark:text-slate-100">
            <Header
                t={t}
                language={language}
                setLanguage={setLanguage}
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <main>
                <Hero t={t} />
                <About t={t} />
                <Products language={language} t={t} />
                <HowItWorks t={t} />
                <Benefits t={t} />
                <Testimonials language={language} t={t} />
                <FAQ language={language} t={t} />
                <ContactForm t={t} />
            </main>
            <Footer t={t} />
        </div>
    );
}
