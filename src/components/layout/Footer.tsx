"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
    const { dict } = useLanguage();
    const f = dict.footer;

    return (
        <footer className="bg-bg-light text-text-main pt-10 lg:pt-20 pb-5 lg:pb-10 border-t border-text-main/5 arch-grid relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-20 mb-8 lg:mb-16">
                    <div className="lg:col-span-5 space-y-12">
                        <div className="flex items-center">
                            <Image src="/clienses-logo-black.svg" alt="Clienses Logo" width={160} height={30} className="w-40 md:w-48 lg:w-[180px] h-auto" />
                        </div>
                        <div className="space-y-6">
                            <p className="text-primary text-[11px] font-black uppercase tracking-[0.4em]">{f.tagline}</p>
                            <p className="text-lg leading-tight max-w-sm font-light text-text-main/60">
                                {f.desc}<span className="text-primary font-black">{f.desc_accent}</span>.
                            </p>
                        </div>
                        <div className="text-[10px] font-black text-text-main/20 uppercase tracking-[0.3em] leading-loose">
                            {f.est} <br />
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-10">
                        <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">{f.pillars_label}</h4>
                        <ul className="space-y-6">
                            <li><Link href="/strategy" className="text-[11px] font-black text-text-main/40 hover:text-primary transition-colors uppercase tracking-[0.3em]">{f.pillar1}</Link></li>
                            <li><Link href="/intelligence" className="text-[11px] font-black text-text-main/40 hover:text-primary transition-colors uppercase tracking-[0.3em]">{f.pillar2}</Link></li>
                            <li><Link href="/expansion" className="text-[11px] font-black text-text-main/40 hover:text-primary transition-colors uppercase tracking-[0.3em]">{f.pillar3}</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-10">
                        <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">{f.firm_label}</h4>
                        <ul className="space-y-6">
                            <li><Link href="/about" className="text-[11px] font-black text-text-main/40 hover:text-primary transition-colors uppercase tracking-[0.3em]">{f.firm_context}</Link></li>
                            <li><Link scroll={false} href="?contact=true" className="text-[11px] font-black text-text-main/40 hover:text-primary transition-colors uppercase tracking-[0.3em]">{f.firm_consult}</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-10">
                        <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">{f.channels_label}</h4>
                        <div className="space-y-4">
                            <Link scroll={false} href="?contact=true" className="text-xl font-black text-text-main hover:text-primary transition-colors block">{f.channels_cta}</Link>
                            <a href="tel:+18299129400" className="text-xl font-black text-text-main hover:text-primary transition-colors block ">+1 829 912 9400</a>
                        </div>
                    </div>
                </div>

                <div className="pt-4 md:pt-8 border-t border-text-main/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 text-center md:text-left">
                    <p className="text-[9px] font-black text-text-main/20 uppercase tracking-[0.4em]">
                        © {new Date().getFullYear()} CLIENSES STRATEGIC GROUP. <span className="text-primary/40">{f.silent_power}</span> DESIGN BY <a href="https://cozuna.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">COZUNA.COM</a>
                    </p>
                    <div className="flex gap-16">
                        <Link href="/privacy" className="text-[9px] font-black text-text-main/20 hover:text-text-main transition-colors uppercase tracking-[0.3em]">{f.privacy}</Link>
                        <Link href="/terms" className="text-[9px] font-black text-text-main/20 hover:text-text-main transition-colors uppercase tracking-[0.3em]">{f.terms}</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
