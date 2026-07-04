"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export const LanguageSwitcher = ({ className }: { className?: string }) => {
    const { locale, setLocale } = useLanguage();

    return (
        <div className={cn("flex items-center gap-3", className)}>
            <Globe className="w-3.5 h-3.5 text-primary/40" />
            <div 
                role="group" 
                aria-label="Selección de idioma"
                className="flex items-center bg-structure/5 rounded-full p-1 border border-structure/10 backdrop-blur-sm"
            >
                <button
                    aria-label="Español"
                    aria-pressed={locale === "es"}
                    onClick={() => setLocale("es")}
                    className={cn(
                        "text-[10px] font-black tracking-widest px-3 py-1 rounded-full transition-all duration-500 uppercase",
                        locale === "es" 
                            ? "bg-primary text-white shadow-sm" 
                            : "text-text-main/40 hover:text-text-main"
                    )}
                >
                    ES
                </button>
                <button
                    aria-label="English"
                    aria-pressed={locale === "en"}
                    onClick={() => setLocale("en")}
                    className={cn(
                        "text-[10px] font-black tracking-widest px-3 py-1 rounded-full transition-all duration-500 uppercase",
                        locale === "en" 
                            ? "bg-primary text-white shadow-sm" 
                            : "text-text-main/40 hover:text-text-main"
                    )}
                >
                    EN
                </button>
                <button
                    aria-label="Français"
                    aria-pressed={locale === "fr"}
                    onClick={() => setLocale("fr")}
                    className={cn(
                        "text-[10px] font-black tracking-widest px-3 py-1 rounded-full transition-all duration-500 uppercase",
                        locale === "fr" 
                            ? "bg-primary text-white shadow-sm" 
                            : "text-text-main/40 hover:text-text-main"
                    )}
                >
                    FR
                </button>
                <button
                    aria-label="Kreyòl"
                    aria-pressed={locale === "ht"}
                    onClick={() => setLocale("ht")}
                    className={cn(
                        "text-[10px] font-black tracking-widest px-3 py-1 rounded-full transition-all duration-500 uppercase",
                        locale === "ht" 
                            ? "bg-primary text-white shadow-sm" 
                            : "text-text-main/40 hover:text-text-main"
                    )}
                >
                    HT
                </button>
            </div>
        </div>
    );
};
