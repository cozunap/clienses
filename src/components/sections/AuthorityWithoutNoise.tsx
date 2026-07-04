"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const AuthorityWithoutNoise = () => {
    const { dict } = useLanguage();
    const b = dict.brand;

    return (
        <Section padded={false} className="bg-bg-light pt-16 pb-32 relative overflow-hidden">
            {/* Structural Background Image */}
            <div className="absolute inset-0 z-0 opacity-10 grayscale">
                <div className="h-full w-full arch-grid"></div>
            </div>

            <Container className="relative z-10">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
                        <div className="lg:col-span-8">
                            <Reveal className="space-y-12">
                                <div className="flex items-center gap-6">
                                    <div className="h-[2px] w-24 bg-primary"></div>
                                    <span className="text-[11px] font-black tracking-[0.6em] uppercase text-primary">{b.label}</span>
                                </div>

                                <h2 className="text-[38px] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-black uppercase text-text-main break-words">
                                    {b.title} <br />
                                    <span className="text-primary/40">{b.title_accent}</span>
                                </h2>
                            </Reveal>
                        </div>
                        <div className="col-span-4 hidden lg:block">
                            <Reveal delay={400} className="vertical-text text-5xl lg:text-[100px] font-black text-text-main/[0.02] select-none">
                                CLIENSES
                            </Reveal>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-20 items-end mt-12 lg:mt-0">
                        <Reveal delay={300} className="lg:col-span-4 space-y-10">
                            <p className="text-xl sm:text-2xl md:text-5xl font-light leading-[1.05] text-text-main/80">
                                {b.body}<span className="text-primary font-black">{b.body_accent}</span>{b.body_end}
                            </p>
                        </Reveal>

                        <Reveal delay={600} className="lg:col-span-6 space-y-12 border-t border-text-main/10 pt-16">
                            <div className="space-y-4">
                                <p className="text-[11px] font-black tracking-[0.4em] uppercase text-primary">{b.principle_label}</p>
                                <p className="text-[38px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[100px] xl:text-[100px] font-black text-text-main">{b.principle_title}<br />{b.principle_title2}</p>
                            </div>
                            <p className="text-base font-bold text-text-main/30 uppercase tracking-[0.3em] leading-relaxed">
                                {b.taglines[0]} <br />
                                {b.taglines[1]} <br />
                                {b.taglines[2]}<span className="text-primary">{b.tagline_accent}</span>.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </Container>

            {/* Accent Circle */}
            <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        </Section>
    );
};
