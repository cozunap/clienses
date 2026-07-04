"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
    const { dict } = useLanguage();
    const s = dict.privacy;

    return (
        <main className="min-h-screen bg-bg-light text-structure">
            <Navbar />

            <Section className="pt-48 pb-24 border-b border-light-gray">
                <Container>
                    <Reveal className="max-w-4xl space-y-8">
                        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block">{s.pillar}</span>
                        <h1 className="text-5xl md:text-5xl font-black uppercase">
                            {s.hero_title1} <br />
                            <span className="text-structure/20">{s.hero_title_accent}</span>
                        </h1>
                    </Reveal>
                </Container>
            </Section>

            <Section className="py-24">
                <Container>
                    <Reveal className="max-w-3xl space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-xl font-black uppercase">{s.s1_title}</h2>
                            <p className="text-lg text-structure/60 leading-relaxed font-light">{s.s1_desc}</p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xl font-black uppercase">{s.s2_title}</h2>
                            <p className="text-lg text-structure/60 leading-relaxed font-light">{s.s2_desc}</p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xl font-black uppercase">{s.s3_title}</h2>
                            <p className="text-lg text-structure/60 leading-relaxed font-light">{s.s3_desc}</p>
                            <ul className="space-y-4 pt-4 border-l-2 border-primary pl-8">
                                {s.s3_items.map((item: string) => (
                                    <li key={item} className="text-sm font-bold uppercase text-structure/80">{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xl font-black uppercase">{s.s4_title}</h2>
                            <p className="text-lg text-structure/60 leading-relaxed font-light">
                                {s.s4_desc}<span className="font-bold text-structure">{s.s4_email}</span>{s.s4_desc_end}
                            </p>
                        </div>

                        <div className="pt-12 border-t border-light-gray">
                            <p className="text-[10px] font-bold text-structure/30 uppercase tracking-[0.2em]">{s.footer_note}</p>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
