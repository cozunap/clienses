"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import es from "@/dictionaries/es.json";
import en from "@/dictionaries/en.json";
import fr from "@/dictionaries/fr.json";
import ht from "@/dictionaries/ht.json";

export type Locale = "es" | "en" | "fr" | "ht";

type Dict = typeof es;

const dictionaries: Record<Locale, Dict> = { es, en, fr, ht };

interface LanguageContextType {
    locale: Locale;
    dict: Dict;
    setLocale: (l: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    locale: "es",
    dict: es,
    setLocale: () => { },
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("es");

    useEffect(() => {
        setTimeout(() => {
            // Detect browser language
            const browserLang = navigator.language.split("-")[0] as Locale;
            if (dictionaries[browserLang]) {
                setLocaleState(browserLang);
                document.documentElement.lang = browserLang;
            }
        }, 0);
    }, []);

    const setLocale = (l: Locale) => {
        setLocaleState(l);
    };

    return (
        <LanguageContext.Provider value={{ locale, dict: dictionaries[locale], setLocale }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
