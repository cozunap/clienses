"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const { dict } = useLanguage();

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            // Use setTimeout to avoid synchronous state update within effect
            setTimeout(() => setIsVisible(true), 0);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] bg-bg-light border-t border-text-main/10 shadow-corporate animate-fade-in p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex-1 pr-8 relative">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute -top-2 right-0 sm:hidden text-text-main/40 hover:text-primary transition-colors"
                    aria-label={dict.cookies.close}
                >
                    <X size={20} />
                </button>
                <p className="text-sm font-medium text-text-main/70 leading-relaxed max-w-4xl">
                    {dict.cookies.text}{" "}
                    <Link href="/privacy" className="text-primary hover:underline font-bold transition-all">
                        {dict.cookies.link}
                    </Link>{" "}
                    {dict.cookies.text_end}
                </p>
            </div>
            <div className="flex gap-4 w-full sm:w-auto shrink-0">
                <Button
                    onClick={handleAccept}
                    className="w-full sm:w-auto bg-primary text-white hover:bg-structure px-8 py-3 text-[10px] tracking-[0.2em] uppercase rounded-sm font-black transition-colors"
                >
                    {dict.cookies.accept}
                </Button>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="hidden sm:block text-text-main/20 hover:text-primary transition-colors ml-4"
                aria-label={dict.cookies.close}
            >
                <X size={24} />
            </button>
        </div>
    );
}
