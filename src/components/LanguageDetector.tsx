"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n/dictionaries";

export function LanguageDetector() {
    const router = useRouter();

    useEffect(() => {
        // Check if we are at the root `/` and not already in a locale subpath.
        // In a static export without middleware, we need to manually redirect from the root.
        if (window.location.pathname === "/") {
            // Local storage preference > Browser Language > Default
            const savedLocale = localStorage.getItem("locale");

            let detectedLocale: Locale = i18n.defaultLocale;

            if (savedLocale && i18n.locales.includes(savedLocale as Locale)) {
                detectedLocale = savedLocale as Locale;
            } else if (typeof navigator !== "undefined") {
                const browserLang = navigator.language.split("-")[0];
                if (i18n.locales.includes(browserLang as Locale)) {
                    detectedLocale = browserLang as Locale;
                }
            }

            router.replace(`/${detectedLocale}`);
        }
    }, [router]);

    return null;
}
