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
  // TIER 1 — AUTHORITY & POSITIONING
  "top-strategy-consulting-firm",
  "elite-management-consulting-firm",
  "executive-strategy-advisory",
  "organizational-transformation-consulting",
  "corporate-strategy-consulting-firm",
  "business-architecture-firm",
  "c-suite-management-consulting",
  "strategic-leadership-consulting",
  
  // TIER 2 — US MARKET
  "strategy-consulting-firm-united-states",
  "management-consulting-firm-usa",
  "organizational-design-consulting-usa",
  "business-scaling-consulting-firm-us",
  "executive-advisory-firm-america",
  "corporate-restructuring-consulting-united-states",
  "business-transformation-firm-us",
  
  // TIER 3 — CANADIAN MARKET
  "strategy-consulting-firm-canada",
  "management-consulting-firm-toronto",
  "organizational-consulting-canada",
  "executive-advisory-consulting-canada",
  "business-strategy-firm-montreal",
  "corporate-strategy-consulting-vancouver",
  
  // TIER 4 — LATIN AMERICA & GLOBAL
  "strategic-consulting-firm-latin-america",
  "organizational-strategy-consulting-latam",
  "business-structure-consulting-latin-america",
  "consulting-firm-for-executive-leadership-teams",
  "corporate-governance-consulting",
  "sustainable-business-scaling-consulting",
  "organizational-architecture-consulting",
  "how-to-scale-a-business-without-losing-structure",
  "strategic-advisory-for-holding-companies",
  "business-transformation-consulting-firm",
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
