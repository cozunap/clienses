"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service if available
        console.error("Global Error Caught:", error);
    }, [error]);

    return (
        <Section padded={false} className="bg-bg-light min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <span className="text-primary font-black tracking-[0.6em] uppercase text-[11px] block">Error del Sistema</span>
                        <h1 className="text-5xl sm:text-7xl font-black uppercase text-text-main leading-none">
                            Interrupción <br /> <span className="text-primary/40">Inesperada</span>
                        </h1>
                    </div>
                    
                    <p className="text-xl sm:text-2xl text-text-main/60 font-light leading-relaxed max-w-2xl mx-auto">
                        Hemos encontrado un obstáculo técnico. Nuestro sistema ha registrado el evento. Puede reintentar la operación o volver al inicio.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Button
                            onClick={() => reset()}
                            className="bg-primary text-white hover:bg-structure px-12 py-4 rounded-sm text-xs font-black tracking-[0.2em] uppercase transition-colors"
                        >
                            Reintentar Operación
                        </Button>
                        <Link
                            href="/"
                            className="text-xs font-black tracking-[0.2em] uppercase text-text-main hover:text-primary transition-colors py-4 px-6"
                        >
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </Container>
            
            {/* Structural Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] arch-grid z-0"></div>
        </Section>
    );
}
