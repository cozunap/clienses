"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const HREFS = ["/strategy", "/intelligence", "/expansion"];

export const StrategicIntelligence = () => {
    const { dict } = useLanguage();
    const pillars = dict.services.pillars;

    return (
        <Section padded={false} className="bg-bg-light pt-40 pb-20 arch-grid border-y border-text-main/5 relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-12 mb-10 md:mb-20">
                        <Reveal className="space-y-6">
                            <span className="text-primary font-black tracking-[0.6em] uppercase text-[11px] block">{dict.services.label}</span>
                            <h2 className="text-5xl sm:text-5xl md:text-5xl font-black uppercase text-text-main break-words">
                                {dict.services.title} <br /> <span className="text-primary">{dict.services.title_accent}</span>
                            </h2>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        <Reveal delay={200} className="space-y-10">
                            <p className="text-xl md:text-2xl text-text-main/60 leading-tight font-light max-w-sm">
                                {dict.services.desc}<span className="text-primary font-black">{dict.services.desc_accent}</span>{dict.services.desc_end}
                            </p>
                            <div className="h-[4px] w-20 bg-primary"></div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-8">
                        <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pillars.map((pillar, idx) => (
                                <RevealItem key={idx}>
                                    <Link
                                        href={HREFS[idx]}
                                        className="block group p-8 sm:p-12 border border-text-main/5 bg-bg-light/[0.02] hover:bg-primary hover:border-primary transition-all duration-700 relative overflow-hidden shadow-corporate h-full"
                                    >
                                    <div className="space-y-12 relative z-10">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[11px] font-black text-primary tracking-[0.5em] group-hover:text-text-main transition-colors">PILLAR 0{idx + 1}</span>
                                            <ArrowUpRight className="text-primary group-hover:text-text-main group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                                        </div>
                                        <div className="space-y-6">
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-text-main group-hover:text-text-main transition-colors">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-text-main/40 text-base group-hover:text-text-main/70 transition-colors font-light leading-snug">
                                                {pillar.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 group-hover:bg-text-main/10 -rotate-45 translate-x-10 -translate-y-10 transition-all"></div>
                                    </Link>
                                </RevealItem>
                            ))}

                            <RevealItem>
                                <div className="p-8 sm:p-12 border border-primary/20 bg-primary/5 space-y-8 h-full flex flex-col justify-center">
                                    <p className="text-sm font-black text-primary uppercase italic group-hover:text-text-main transition-colors">{dict.services.quote_label}</p>
                                    <p className="text-xl font-light text-text-main italic leading-tight">
                                        {dict.services.quote}
                                    </p>
                                </div>
                            </RevealItem>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
