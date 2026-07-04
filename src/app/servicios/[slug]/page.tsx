import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StrategicIntelligence } from "@/components/sections/StrategicIntelligence";
import { AuthorityWithoutNoise } from "@/components/sections/AuthorityWithoutNoise";
import { MethodFramework } from "@/components/sections/MethodFramework";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const PREDEFINED_SLUGS = [
  "strategic-consulting-firm-latin-america",
  "organizational-strategy-consulting",
  "business-structure-consulting-dominican-republic",
  "c-suite-strategic-advisory",
  "organizational-design-consulting-firm",
  "business-scaling-strategy-consulting",
  "corporate-strategy-firm-caribbean",
  "how-to-scale-a-business-without-losing-structure",
  "consulting-firm-for-executive-leadership-teams",
  "organizational-structure-problems-growing-companies",
  "strategic-consulting-for-latin-american-businesses",
  "business-architecture-consulting-for-ceos",
];

export async function generateStaticParams() {
  return PREDEFINED_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const p = await params;
  if (!PREDEFINED_SLUGS.includes(p.slug)) {
    return {
      title: "Servicio No Encontrado",
    };
  }

  // Format the slug for the title (e.g., "Estrategia Corporativa Santo Domingo")
  const formattedTitle = p.slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Clienses | ${formattedTitle}`,
    description: `Consultoría estratégica especializada en ${formattedTitle}. Transformamos la improvisación en arquitectura de negocios sólida.`,
    alternates: {
      canonical: `https://clienses.com/servicios/${p.slug}`,
    },
  };
}

export default async function ServicioProgrammaticPage({ params }: PageProps) {
  const p = await params;
  
  if (!PREDEFINED_SLUGS.includes(p.slug)) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StrategicIntelligence />
      <AuthorityWithoutNoise />
      <MethodFramework />
      <Footer />
    </main>
  );
}
