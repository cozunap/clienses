import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { BusinessAssessment } from "../ui/BusinessAssessment";

export function AssessmentSection() {
    return (
        <Section className="bg-bg-light py-24 sm:py-32 overflow-hidden border-t border-text-main/5 relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] sm:text-xs block mb-6">
                        Auditoría Estratégica
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-text-main leading-tight mb-6">
                        Diagnóstico de <br />
                        <span className="text-primary">Escalabilidad</span> Empresarial
                    </h2>
                    <p className="text-text-main/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Complete este diagnóstico estructurado de 4 pasos para identificar sus cuellos de botella operativos y recibir un plan de acción confidencial para escalar sin perder estructura.
                    </p>
                </div>

                <BusinessAssessment />
            </Container>
        </Section>
    );
}
