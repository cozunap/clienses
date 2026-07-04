import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <Section padded={false} className="bg-bg-light min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <span className="text-primary font-black tracking-[0.6em] uppercase text-[11px] block">Error 404</span>
                        <h1 className="text-5xl sm:text-7xl font-black uppercase text-text-main leading-none">
                            Destino <br /> <span className="text-primary/40">Desconocido</span>
                        </h1>
                    </div>
                    
                    <p className="text-xl sm:text-2xl text-text-main/60 font-light leading-relaxed max-w-2xl mx-auto">
                        La página que busca no se encuentra en nuestros archivos. Le sugerimos retornar a los pilares de nuestra estrategia.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Link
                            href="/"
                            className="bg-primary text-white hover:bg-structure px-12 py-4 rounded-sm text-xs font-black tracking-[0.2em] uppercase transition-colors flex items-center gap-3"
                        >
                            Retornar a Inicio
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </Container>
            
            {/* Structural Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] arch-grid z-0"></div>
        </Section>
    );
}
