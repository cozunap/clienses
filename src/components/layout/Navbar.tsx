"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const normalizedPath = pathname.replace(/\/$/, "") || "/";
    const { dict } = useLanguage();

    const navLinks = [
        { name: dict.nav.strategy, href: "/strategy" },
        { name: dict.nav.intelligence, href: "/intelligence" },
        { name: dict.nav.expansion, href: "/expansion" },
        { name: dict.nav.about, href: "/about" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 left-0 w-full z-50 transition-all duration-700 p-[12px] bg-bg-light/95 backdrop-blur-md border-b border-text-main/5 shadow-sm"
            )}
        >
            <Container>
                <div className="flex justify-between items-center w-full">
                    <Link href="/" className="group relative z-50 flex-shrink-0">
                        <div className="flex items-center">
                            <Image
                                src={"/clienses-logo-black.svg"}
                                alt="Clienses Logo"
                                width={180}
                                height={30}
                                className={cn(
                                    "transition-all duration-700 transform group-hover:scale-110 h-auto origin-left",
                                    isScrolled ? "w-32 md:w-36 lg:w-[150px]" : "w-40 md:w-44 lg:w-[180px]"
                                )}
                                priority
                            />
                        </div>
                    </Link>

                    <div className="flex items-center gap-6 lg:gap-8">
                        <div className="hidden lg:flex items-center gap-4">
                            {navLinks.map((link, index) => (
                                <div key={link.href} className="flex items-center gap-4">
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-[11px] font-black tracking-[0.15em] transition-all duration-500 uppercase hover:text-primary relative py-2 inline-block transform hover:scale-110",
                                            normalizedPath === link.href ? "text-primary" : "text-text-main/60"
                                        )}
                                    >
                                        {link.name}
                                        {normalizedPath === link.href && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
                                        )}
                                    </Link>
                                    {index < navLinks.length - 1 && (
                                        <span className="text-structure/10 font-light select-none">|</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-10">
                            <div className={cn(
                                "hidden lg:flex items-center border-l pl-10 border-structure/10"
                            )}>
                                <Link
                                    href="?contact=true"
                                    scroll={false}
                                    className="bg-accent text-white px-10 py-4 text-[11px] font-black tracking-[0.1em] uppercase hover:bg-primary transition-all duration-700 shadow-corporate rounded-sm"
                                >
                                    {dict.nav.contact}
                                </Link>
                            </div>

                            <LanguageSwitcher className="hidden lg:flex" />

                            <button
                                className="lg:hidden p-2 z-50 text-text-main"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-bg-light z-40 transition-all duration-700 lg:hidden flex flex-col justify-center px-12",
                    mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                <div className="space-y-12">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn("block text-4xl sm:text-5xl font-black hover:text-primary transition-colors uppercase", normalizedPath === link.href ? "text-primary" : "text-text-main")}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-12 border-t border-text-main/10">
                        <Link
                            href="?contact=true"
                            scroll={false}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-3xl sm:text-4xl font-black text-primary uppercase"
                        >
                            {dict.nav.contact}
                        </Link>
                    </div>

                    <div className="pt-6">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
};
