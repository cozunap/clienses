"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { useLanguage } from "@/context/LanguageContext";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "El nombre es muy corto"),
    email: z.string().email("Dirección de email inválida"),
    phone: z.string().min(8, "Teléfono inválido"),
    intent: z.string().min(10, "Por favor, detalla más tu intención"),
});

export function ContactModal() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isOpen = searchParams.get("contact") === "true";
    const { dict } = useLanguage();

    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        intent: ""
    });

    const closeModal = () => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.delete("contact");
        router.replace(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
        // Reset state after closing
        setTimeout(() => {
            setIsSuccess(false);
            setError(null);
            setFormData({ name: "", email: "", phone: "", intent: "" });
        }, 300);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault();

        if (isLoading) return;
        setIsLoading(true);
        setError(null);

        const validation = contactSchema.safeParse(formData);
        if (!validation.success) {
            setError(validation.error.issues[0].message);
            setIsLoading(false);
            return;
        }

        fetch("https://script.google.com/macros/s/AKfycbx5qPQrRTBoSs4jGtugbBBd2IuL7jS_um_8ROnzsIHtGcJ96arWDaRlmHjaQ4Q8JrRfsA/exec", {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(formData),
        })
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || dict.contact.error_default);
                }
                return data;
            })
            .then(() => {
                setIsSuccess(true);
            })
            .catch((err: Error) => {
                console.error("Error al enviar el formulario:", err);
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 lg:p-8 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-bg-light/80 backdrop-blur-md transition-opacity"
                onClick={closeModal}
            ></div>

            <div 
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
                className="relative bg-bg-light w-full max-w-4xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto sm:rounded-sm shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="flex justify-between items-center p-6 sm:p-8 border-b border-text-main/10 shrink-0 bg-bg-light shadow-[0_10px_40px_rgba(0,0,0,0.03)] z-10">
                    <div>
                        <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] block mb-2">
                            {dict.contact.label}
                        </span>
                        <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-black uppercase  flex items-center gap-3">
                            {dict.contact.title} <span className="text-primary">{dict.contact.title_accent}</span>
                        </h2>
                    </div>
                    <button
                        aria-label="Cerrar ventana de contacto"
                        onClick={closeModal}
                        className="text-structure/40 hover:text-primary transition-colors p-2 rounded-full hover:bg-text-main"
                    >
                        <X size={24} strokeWidth={3} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto w-full flex flex-col relative">
                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in p-10 min-h-[400px]">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 transition-transform scale-110">
                                <CheckCircle2 className="w-12 h-12 text-primary" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-black uppercase ">
                                {dict.contact.success_title}<span className="text-primary">.</span>
                            </h3>
                            <p className="text-lg font-medium text-text-main/70 max-w-md">
                                {dict.contact.success_desc}
                            </p>
                            <Button
                                onClick={closeModal}
                                className="mt-8 bg-structure text-white hover:bg-primary transition-colors px-10 py-4 text-xs font-black tracking-[0.2em] uppercase sm:rounded-full rounded-sm"
                            >
                                {dict.contact.success_cta}
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col h-full bg-bg-light">
                            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8 animate-fade-in">
                                {error ? (
                                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 animate-slide-up">
                                        <p className="text-sm font-bold uppercase tracking-wider mb-1">{dict.contact.error_title}</p>
                                        <p className="text-xs font-medium leading-relaxed">{error}</p>
                                    </div>
                                ) : (
                                    <p className="text-sm sm:text-base text-text-main/70 font-medium mb-2 leading-relaxed">
                                        {dict.contact.form_desc}
                                    </p>
                                )}

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-[11px] font-black tracking-[0.2em] uppercase text-structure/80">
                                            {dict.contact.name_label} <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            required
                                            disabled={isLoading}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white border border-text-main/20 focus:border-primary outline-none px-4 py-3 sm:px-5 sm:py-4 rounded-sm text-text-main font-medium transition-all placeholder:text-text-main/40"
                                            placeholder={dict.contact.name_placeholder}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-[11px] font-black tracking-[0.2em] uppercase text-structure/80">
                                                {dict.contact.email_label} <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                disabled={isLoading}
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white border border-text-main/20 focus:border-primary outline-none px-4 py-3 sm:px-5 sm:py-4 rounded-sm text-text-main font-medium transition-all placeholder:text-text-main/40"
                                                placeholder={dict.contact.email_placeholder}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="block text-[11px] font-black tracking-[0.2em] uppercase text-structure/80">
                                                {dict.contact.phone_label} <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                required
                                                disabled={isLoading}
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-white border border-text-main/20 focus:border-primary outline-none px-4 py-3 sm:px-5 sm:py-4 rounded-sm text-text-main font-medium transition-all placeholder:text-text-main/40"
                                                placeholder={dict.contact.phone_placeholder}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="intent" className="block text-[11px] font-black tracking-[0.2em] uppercase text-structure/80">
                                            {dict.contact.intent_label} <span className="text-primary">*</span>
                                        </label>
                                        <textarea
                                            id="intent"
                                            required
                                            disabled={isLoading}
                                            rows={4}
                                            value={formData.intent}
                                            onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                                            className="w-full bg-white border border-text-main/20 focus:border-primary outline-none px-4 py-3 sm:px-5 sm:py-4 rounded-sm text-text-main font-medium transition-all placeholder:text-text-main/40 resize-none"
                                            placeholder={dict.contact.intent_placeholder}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="pt-6 mt-4 flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full sm:w-auto bg-primary text-white hover:bg-structure px-10 py-4 sm:rounded-full rounded-sm text-xs font-black tracking-[0.2em] uppercase transition-colors shadow-md disabled:opacity-70 disabled:cursor-wait flex items-center justify-center gap-3"
                                    >
                                        {isLoading ? dict.contact.submitting : dict.contact.submit}
                                        {!isLoading && <Send className="w-4 h-4" />}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
