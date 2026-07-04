"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { dict } = useLanguage();
  const slides = dict.hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <Section padded={false} className="relative h-[90vh] w-full flex items-center bg-bg-light overflow-hidden arch-grid">
      {/* Background Image / Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-bg-light">
        {slides.map((s, i) => (
          <Image
            key={i}
            src={[
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070",
            ][i]}
            alt="Firma de Consultoría Estratégica en República Dominicana - Clienses"
            fill
            className={cn(
              "object-cover transition-all duration-[1500ms] ease-in-out grayscale",
              i === currentSlide ? "opacity-10 scale-100" : "opacity-0 scale-105"
            )}
            priority={i === 0}
          />
        ))}
      </div>

      <Container className="relative z-10 pt-[40px] pb-8 flex flex-col justify-center h-full">
        <div className="max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6">
                <div className="h-[2px] w-24 bg-primary"></div>
                <span className="text-primary font-black tracking-[0.5em] uppercase text-[11px] block">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-[38px] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] 2xl:text-[140px] font-black text-text-main uppercase max-w-[95%] sm:max-w-6xl break-words mt-28 sm:mt-0">
                {slide.title1} <br className="hidden sm:block" />
                <span className="text-primary">{slide.title_accent}</span>
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-8 space-y-8 md:space-y-12">
                <p className="text-xl md:text-2xl lg:text-[33px] text-text-main/80 leading-[1.05] font-light max-w-4xl">
                  {slide.desc} <span className="text-text-main font-bold">{slide.desc_bold}</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start sm:items-center w-full">
                  <Button scroll={false} href="?contact=true" size="lg" className="bg-accent text-white hover:bg-primary border-none px-16 py-8 text-xs tracking-[0.2em] font-black group transition-all duration-700 shadow-corporate">
                    {dict.hero.cta}
                    <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-3" />
                  </Button>
                  <div className="hidden sm:block">
                    <span className="text-primary/40 text-[10px] font-black tracking-[0.4em] uppercase">RSD · {slide.market}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 border-l border-text-main/10 pl-12 space-y-10 hidden lg:block">
                <div className="space-y-3">
                  <div className="text-5xl font-black text-text-main uppercase">R.D.</div>
                  <div className="text-[11px] text-primary font-black uppercase text-text-main/60">{slide.market}</div>
                </div>
                <div className="h-[1px] w-12 bg-primary font-black"></div>
                <p className="text-text-main/40 text-base font-light leading-relaxed">
                  {dict.hero.sidebar}
                </p>
              </div>
            </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      {/* Vertical Marker */}
      <div className="absolute top-40 right-12 flex-col items-center gap-10 hidden xl:flex animate-fade-in ease-in-out duration-1000" key={`marker-${currentSlide}`}>
        <div className="w-[1px] h-48 bg-gradient-to-b from-primary to-transparent"></div>
        <div className="vertical-text text-primary/40 text-[10px] font-bold tracking-[0.6em] uppercase">{slide.marker}</div>
      </div>
    </Section>
  );
};
