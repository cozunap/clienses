"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function StrategyPage() {
    const { dict } = useLanguage();
    const s = dict.strategy;

    return (
        <main className="min-h-screen bg-bg-light">
            <Navbar />

            {/* Hero Section - Strategy */}
            <Section className="pt-48 pb-24 border-b border-light-gray arch-grid relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-end">
                        <div className="lg:col-span-8">
                            <Reveal className="space-y-12">
                                <span className="text-primary font-black tracking-[0.6em] uppercase text-[11px] block">{s.pillar}</span>
                                <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-[100px] font-black text-structure uppercase break-words">
                                    {s.hero_title1} <br />
                                    <span className="text-primary">{s.hero_title_accent}</span>
                                </h1>
                                <p className="text-[33px] leading-[1.05] max-w-4xl font-light text-structure/80">
                                    {s.hero_desc}<span className="text-primary font-bold">{s.hero_desc_accent}</span>{s.hero_desc_end}
                                </p>
                            </Reveal>
                        </div>
                        <div className="lg:col-span-4 border-l-4 border-primary pl-12 pb-6 hidden lg:block">
                            <Reveal delay={300} className="space-y-10">
                                <p className="text-xl font-light text-structure/50 leading-relaxed italic">
                                    {s.hero_quote}
                                </p>
                                <div className="h-[2px] w-20 bg-primary"></div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Content Section */}
            <Section padded={false} className="py-20 lg:py-40 bg-bg-light">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                        <Reveal className="space-y-16">
                            <h2 className="text-4xl sm:text-5xl font-black uppercase text-structure">{s.content_title} <span className="text-primary">{s.content_title_accent}</span></h2>
                            <div className="space-y-10 text-xl text-structure/60 leading-relaxed font-light">
                                <p>
                                    {s.content_desc}<span className="text-primary font-bold">{s.content_desc_accent}</span>{s.content_desc_end}
                                </p>
                                <div>
                                    <h3 className="text-sm font-black tracking-[0.3em] uppercase text-primary mb-6">{s.section1_title}</h3>
                                    <ul className="space-y-4">
                                        {s.section1_items.map((item: string) => (
                                            <li key={item} className="flex items-center gap-6 group">
                                                <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></div>
                                                <span className="font-bold text-structure uppercase text-[11px] group-hover:text-primary transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-4">
                                    <h3 className="text-sm font-black tracking-[0.3em] uppercase text-primary mb-6">{s.section2_title}</h3>
                                    <ul className="space-y-4">
                                        {s.section2_items.map((item: string) => (
                                            <li key={item} className="flex items-center gap-6 group">
                                                <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></div>
                                                <span className="font-bold text-structure uppercase text-[11px] group-hover:text-primary transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={400} className="relative aspect-square shadow-corporate overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                                alt="Strategy Architecture"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-40"></div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
