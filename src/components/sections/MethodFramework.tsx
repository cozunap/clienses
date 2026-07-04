"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const MethodFramework = () => {
    const { dict } = useLanguage();
    const m = dict.method;

    return (
        <Section padded={false} className="bg-bg-light pt-0 pb-16 arch-grid relative">
            <Container>
                <div className="space-y-8 md:space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-end">
                        <Reveal className="space-y-4 md:space-y-6">
                            <span className="text-primary font-black tracking-[0.6em] uppercase text-[11px] block">{m.label}</span>
                            <h2 className="text-[38px] leading-[1.1] sm:text-5xl font-black uppercase text-text-main break-words">
                                {m.title} <br /> <span className="text-text-main/20">{m.title_accent}</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={200} className="border-l border-text-main/10 pl-8 md:pl-16 pb-6">
                            <p className="text-xl md:text-2xl text-text-main/40 leading-tight font-light max-w-sm">
                                {m.desc}<span className="text-primary font-bold">{m.desc_accent}</span>{m.desc_end}
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {m.steps.map((step, i) => (
                            <Reveal key={i} delay={i * 150} className="relative p-12 bg-bg-light/[0.02] border border-text-main/5 hover:border-primary group transition-all duration-700 h-full">
                                <span className="absolute top-10 right-10 text-5xl font-black text-text-main/[0.02] group-hover:text-primary/[0.1] transition-colors">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="space-y-12 relative z-10">
                                    <div className="w-12 h-[2px] bg-primary group-hover:w-24 transition-all duration-700"></div>
                                    <div className="space-y-6">
                                        <h3 className="text-lg sm:text-xl font-black uppercase text-text-main text-balance leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-base text-text-main/30 leading-relaxed font-light group-hover:text-text-main/70 transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
