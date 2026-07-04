import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getSortedInsightsData } from "@/lib/markdown";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Insights | Clienses - Consultoría Estratégica en República Dominicana",
  description: "Perspectivas, artículos y análisis sobre arquitectura corporativa y estrategias de mercado en la República Dominicana.",
};

export default function InsightsPage() {
  const allInsightsData = getSortedInsightsData();

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <Section className="pt-32 pb-20 arch-grid">
          <Container>
            <div className="max-w-4xl space-y-12">
              <h1 className="text-5xl md:text-7xl font-black uppercase text-text-main">
                Insights <span className="text-primary">Estratégicos</span>
              </h1>
              <p className="text-xl font-light text-text-main/60">
                Análisis profundo sobre inteligencia de negocios, diseño corporativo y estructuración para el mercado de la República Dominicana.
              </p>

              <div className="grid gap-10 mt-16">
                {allInsightsData.map(({ slug, date, title, excerpt }) => (
                  <Link href={`/insights/${slug}`} key={slug} className="group block border-b border-text-main/10 pb-10 hover:border-primary transition-colors">
                    <div className="space-y-4">
                      <span className="text-[11px] font-black text-primary tracking-[0.2em] uppercase">{date}</span>
                      <h2 className="text-2xl md:text-4xl font-black uppercase text-text-main group-hover:text-primary transition-colors">
                        {title}
                      </h2>
                      <p className="text-text-main/60 font-light text-lg">
                        {excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
