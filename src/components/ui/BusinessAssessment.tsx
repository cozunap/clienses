"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronRight, Activity, Users, Target } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Por favor ingresa un correo corporativo válido");

export function BusinessAssessment() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [answers, setAnswers] = useState({
        revenue: "",
        bottleneck: "",
        employees: "",
        email: ""
    });

    const steps = [
        {
            title: "¿Cuál es el rango de facturación anual de la empresa?",
            options: [
                { label: "< $500k USD", value: "<500k" },
                { label: "$500k - $2M USD", value: "500k-2m" },
                { label: "$2M - $10M USD", value: "2m-10m" },
                { label: "+$10M USD", value: "+10m" },
            ]
        },
        {
            title: "¿Cuál es el principal cuello de botella que impide el escalamiento actual?",
            options: [
                { label: "Desorden Operativo / Procesos Rotos", value: "Operaciones", icon: <Activity className="w-5 h-5 opacity-70" /> },
                { label: "Adquisición de Clientes / Ventas Estancadas", value: "Ventas", icon: <Target className="w-5 h-5 opacity-70" /> },
                { label: "Falta de Liderazgo o Estructura Directiva", value: "Liderazgo", icon: <Users className="w-5 h-5 opacity-70" /> },
            ]
        },
        {
            title: "¿Cuántos empleados conforman la organización?",
            options: [
                { label: "1 - 10 empleados", value: "1-10" },
                { label: "11 - 50 empleados", value: "11-50" },
                { label: "51 - 200 empleados", value: "51-200" },
                { label: "200+ empleados", value: "200+" },
            ]
        },
        {
            title: "Para enviarle los resultados del diagnóstico estratégico, ¿cuál es su correo corporativo?",
            isInput: true
        }
    ];

    const handleSelect = (field: keyof typeof answers, value: string) => {
        setAnswers({ ...answers, [field]: value });
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const validation = emailSchema.safeParse(answers.email);
        if (!validation.success) {
            setError(validation.error.issues[0].message);
            return;
        }

        setError(null);
        setIsLoading(true);

        try {
            const res = await fetch("/api/assessment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(answers)
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Ocurrió un error inesperado.");
            
            setIsSuccess(true);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Error de conexión. Intente nuevamente.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
        exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
    };

    if (isSuccess) {
        return (
            <div className="w-full max-w-2xl mx-auto bg-bg-light/50 backdrop-blur-sm border border-text-main/10 p-10 sm:p-16 rounded-sm shadow-xl text-center">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4">
                    Diagnóstico <span className="text-primary">Recibido</span>
                </h3>
                <p className="text-text-main/70 font-medium text-lg max-w-md mx-auto">
                    Nuestros directores están evaluando su arquitectura actual. Enviaremos un plan estructurado a <strong>{answers.email}</strong> a la brevedad.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-white border border-text-main/10 p-6 sm:p-12 rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-structure/5">
                <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: "25%" }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            <div className="mb-8">
                <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] block mb-4">
                    Paso {step} de 4
                </span>
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <h2 className="text-xl sm:text-2xl font-black uppercase leading-snug mb-8">
                            {steps[step - 1].title}
                        </h2>

                        {!steps[step - 1].isInput ? (
                            <div className="flex flex-col gap-3">
                                {steps[step - 1].options?.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(
                                            step === 1 ? "revenue" : step === 2 ? "bottleneck" : "employees", 
                                            opt.value
                                        )}
                                        className="w-full text-left p-5 sm:p-6 rounded-sm border border-text-main/10 hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            {('icon' in opt) && opt.icon}
                                            <span className="font-semibold text-text-main group-hover:text-primary transition-colors text-sm sm:text-base">
                                                {opt.label}
                                            </span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-text-main/20 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                {error && (
                                    <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                                        <p className="text-xs font-bold uppercase">{error}</p>
                                    </div>
                                )}
                                <div>
                                    <input
                                        type="email"
                                        required
                                        autoFocus
                                        disabled={isLoading}
                                        value={answers.email}
                                        onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                                        placeholder="ejemplo@corporacion.com"
                                        className="w-full bg-structure/5 border border-text-main/20 focus:border-primary outline-none px-6 py-5 rounded-sm text-text-main font-semibold text-lg transition-all"
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isLoading || !answers.email}
                                    className="w-full bg-structure text-white hover:bg-primary px-8 py-5 rounded-sm text-sm font-black tracking-[0.2em] uppercase transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {isLoading ? (
                                        <span className="animate-pulse">Analizando Arquitectura...</span>
                                    ) : (
                                        <>
                                            Generar Diagnóstico Estratégico <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
