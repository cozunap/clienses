"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { dict } = useLanguage();
    const s = dict.about;

    return (
        <main className="min-h-screen bg-bg-light">
            <Navbar />

            {/* Header - Identity & Origin */}
            <Section className="pt-48 pb-24 border-b border-text-main/5 arch-grid relative">
                <Container className="relative z-10">
                    <Reveal className="max-w-6xl space-y-12">
                        <span className="text-primary font-black tracking-[0.6em] uppercase text-[11px] block">{s.pillar}</span>
                        <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-[90px] font-black text-text-main uppercase break-words">
                            {s.hero_title1} <br />
                            <span className="text-primary">{s.hero_title_accent}</span>
                        </h1>
                        <p className="text-[33px] leading-[1.05] max-w-4xl font-light text-structure/80">
                            {s.hero_desc}
                        </p>
                    </Reveal>
                </Container>
            </Section>

            {/* Origen e Identidad */}
            <Section padded={false} className="py-20 lg:py-32 bg-bg-light border-b border-text-main/5">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
                        <div className="lg:col-span-4">
                            <Reveal>
                                <h2 className="text-3xl font-black uppercase text-structure tracking-[0.1em] mb-8">
                                    {s.origin_title} <br /><span className="text-primary">{s.origin_title_accent}</span>
                                </h2>
                                <p className="text-lg font-light text-text-main/60 leading-relaxed">
                                    {s.origin_desc}
                                </p>
                            </Reveal>
                        </div>
                        <div className="lg:col-span-8">
                            <Reveal delay={200} className="space-y-12">
                                <div className="space-y-6">
                                    <h3 className="text-sm font-black tracking-[0.4em] uppercase text-primary border-l-2 border-primary pl-4">{s.philosophy_label}</h3>
                                    <ul className="space-y-6 text-xl font-light text-structure/80">
                                        <li><strong className="font-bold text-structure">{s.philosophy_item1_bold}</strong>{s.philosophy_item1}</li>
                                        <li><strong className="font-bold text-structure">{s.philosophy_item2_bold}</strong>{s.philosophy_item2}</li>
                                        <li><strong className="font-bold text-structure">{s.philosophy_item3_bold}</strong>{s.philosophy_item3}</li>
                                    </ul>
                                </div>
                                <div className="bg-primary/5 p-8 border-l-4 border-primary">
                                    <p className="text-lg font-bold italic text-structure">
                                        {s.philosophy_quote}
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Reseña Institucional & Diagnóstico */}
            <Section padded={false} className="py-20 lg:py-32 bg-bg-light arch-grid">
                <Container>
                    <Reveal className="max-w-4xl mb-16">
                        <span className="text-primary font-black tracking-[0.5em] uppercase text-[11px] block mb-6">{s.history_label}</span>
                        <h2 className="text-4xl sm:text-5xl font-black uppercase text-text-main">
                            {s.history_title} <span className="text-primary">{s.history_title_accent}</span>
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                        <Reveal delay={200} className="space-y-8">
                            <p className="text-2xl font-light text-structure/80 leading-relaxed">
                                {s.history_p1}
                            </p>
                            <div className="space-y-6 pt-6">
                                <h4 className="text-xs font-black tracking-[0.3em] uppercase text-text-main/50">{s.history_diagnosis_label}</h4>
                                <p className="text-lg font-light text-structure/70 leading-relaxed border-l border-text-main/20 pl-6">
                                    {s.history_diagnosis}
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={400} className="space-y-10">
                            <h4 className="text-xs font-black tracking-[0.3em] uppercase text-primary">{s.history_impact_label}</h4>
                            <div className="space-y-8">
                                <div className="border-b border-text-main/10 pb-6">
                                    <h5 className="font-black uppercase text-structure text-sm mb-2">{s.history_impact1_title}</h5>
                                    <p className="text-base font-light text-structure/70">{s.history_impact1_desc}</p>
                                </div>
                                <div className="border-b border-text-main/10 pb-6">
                                    <h5 className="font-black uppercase text-structure text-sm mb-2">{s.history_impact2_title}</h5>
                                    <p className="text-base font-light text-structure/70">{s.history_impact2_desc}</p>
                                </div>
                                <div>
                                    <h5 className="font-black uppercase text-structure text-sm mb-2">{s.history_impact3_title}</h5>
                                    <p className="text-base font-light text-structure/70">{s.history_impact3_desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* Fundamentos Estratégicos */}
            <Section padded={false} className="py-20 lg:py-32 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] arch-grid pointer-events-none z-0"></div>
                <Container className="relative z-10 text-white">
                    <Reveal className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-white/50 font-black tracking-[0.5em] uppercase text-[10px] block mb-4">{s.fundamentals_label}</span>
                        <h2 className="text-4xl font-normal uppercase tracking-widest text-white">
                            {s.fundamentals_title} <span className="font-black">{s.fundamentals_title_accent}</span>
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        <Reveal delay={200} className="bg-white/5 p-10 border-t-2 border-white/20 hover:border-white transition-colors">
                            <h3 className="text-sm font-black tracking-[0.3em] uppercase mb-6 text-white/80">{s.purpose_title}</h3>
                            <p className="text-lg font-light leading-relaxed">{s.purpose_desc}</p>
                        </Reveal>
                        <Reveal delay={300} className="bg-white/5 p-10 border-t-2 border-white/20 hover:border-white transition-colors">
                            <h3 className="text-sm font-black tracking-[0.3em] uppercase mb-6 text-white/80">{s.mission_title}</h3>
                            <p className="text-lg font-light leading-relaxed">{s.mission_desc}</p>
                        </Reveal>
                        <Reveal delay={400} className="bg-white/5 p-10 border-t-2 border-white/20 hover:border-white transition-colors">
                            <h3 className="text-sm font-black tracking-[0.3em] uppercase mb-6 text-white/80">{s.vision_title}</h3>
                            <p className="text-lg font-light leading-relaxed">{s.vision_desc}</p>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* Valores, Posicionamiento y Roadmap */}
            <Section padded={false} className="py-20 lg:py-32 bg-bg-light">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        <div className="lg:col-span-4 space-y-12">
                            <Reveal>
                                <h3 className="text-sm font-black tracking-[0.4em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">{s.values_label}</h3>
                                <ul className="space-y-5">
                                    {s.values.map((valor: string, i: number) => (
                                        <li key={i} className="flex items-center gap-4 text-structure uppercase text-xs font-black tracking-[0.1em]">
                                            <div className="w-4 h-[1px] bg-primary/40"></div>
                                            {valor}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                            <Reveal delay={200} className="pt-10 border-t border-text-main/10">
                                <h3 className="text-sm font-black tracking-[0.4em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">{s.org_label}</h3>
                                <p className="text-sm font-light text-structure/80 leading-relaxed mb-6">{s.org_desc}</p>
                                <ul className="space-y-4 text-xs font-black uppercase tracking-[0.1em] text-structure/70">
                                    {s.org_items.map((item: string) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </Reveal>
                            <Reveal delay={300} className="pt-10 border-t border-text-main/10">
                                <h3 className="text-sm font-black tracking-[0.4em] uppercase text-primary border-l-2 border-primary pl-4 mb-8">{s.markets_label}</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase text-text-main/40 tracking-[0.2em] mb-1">{s.markets_hq_label}</h5>
                                        <p className="text-sm font-black text-structure uppercase tracking-[0.1em]">{s.markets_hq}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase text-text-main/40 tracking-[0.2em] mb-1">{s.markets_expansion_label}</h5>
                                        <p className="text-sm font-black text-primary uppercase tracking-[0.1em]">{s.markets_expansion}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase text-text-main/40 tracking-[0.2em] mb-1">{s.markets_regional_label}</h5>
                                        <p className="text-sm font-black text-structure/60 uppercase tracking-[0.1em]">{s.markets_regional}</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="lg:col-span-8 space-y-20">
                            <Reveal delay={300} className="space-y-8">
                                <h2 className="text-3xl font-black uppercase text-structure tracking-[0.1em]">{s.positioning_title} <span className="text-primary">{s.positioning_title_accent}</span></h2>
                                <p className="text-2xl font-light text-structure/80 leading-relaxed max-w-2xl">{s.positioning_desc}<span className="text-primary font-black uppercase">{s.positioning_roi}</span>{s.positioning_desc_end}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
                                    <div>
                                        <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-4">{s.contexts_label}</h4>
                                        <ul className="space-y-3 text-sm font-medium text-structure/80">
                                            {s.contexts.map((c: string) => (
                                                <li key={c}>{c}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-4">{s.modalities_label}</h4>
                                        <ul className="space-y-3 text-sm font-medium text-structure/80">
                                            <li><strong className="text-structure">{s.modality1_bold}</strong>{s.modality1}</li>
                                            <li><strong className="text-structure">{s.modality2_bold}</strong>{s.modality2}</li>
                                            <li><strong className="text-structure">{s.modality3_bold}</strong>{s.modality3}</li>
                                            <li><strong className="text-structure">{s.modality4_bold}</strong>{s.modality4}</li>
                                        </ul>
                                        <p className="text-[10px] uppercase font-black tracking-[0.1em] text-primary/60 mt-4">{s.nda_note}</p>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={500} className="bg-text-main text-white p-10 sm:p-14 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03] arch-grid pointer-events-none z-0 mix-blend-overlay"></div>
                                <h3 className="relative z-10 text-sm font-black tracking-[0.5em] uppercase text-primary mb-12">{s.roadmap_label}</h3>
                                <div className="relative z-10 space-y-10">
                                    <div className="relative pl-8 border-l border-white/20">
                                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                                        <h4 className="text-xl font-black uppercase tracking-widest mb-2">{s.roadmap1_period}</h4>
                                        <p className="text-sm font-light text-white/60">{s.roadmap1_desc}</p>
                                    </div>
                                    <div className="relative pl-8 border-l border-white/20">
                                        <div className="absolute w-3 h-3 bg-white/40 rounded-full -left-[6.5px] top-1"></div>
                                        <h4 className="text-xl font-black uppercase tracking-widest mb-2 text-white/80">{s.roadmap2_period}</h4>
                                        <p className="text-sm font-light text-white/50">{s.roadmap2_desc}</p>
                                    </div>
                                    <div className="relative pl-8 border-l border-transparent">
                                        <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-1"></div>
                                        <h4 className="text-xl font-black uppercase tracking-widest mb-2 text-white/60">{s.roadmap3_period}</h4>
                                        <p className="text-sm font-light text-white/40">{s.roadmap3_desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
