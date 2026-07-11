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

import { PREDEFINED_SLUGS } from "@/lib/servicios";

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

  const formattedTitle = p.slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `¿En qué consiste el servicio de ${formattedTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Nuestro servicio de ${formattedTitle} está diseñado para transformar la improvisación corporativa en arquitectura de negocios sólida. Ayudamos a su empresa a escalar con estructura, procesos optimizados y estrategia directiva.`
        }
      },
      {
        "@type": "Question",
        "name": `¿A quién va dirigido el servicio de ${formattedTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Está dirigido a ejecutivos, CEOs y dueños de empresas que buscan llevar su organización al siguiente nivel de rentabilidad y facturación sin sacrificar el orden operativo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué elegir a Clienses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En Clienses no hacemos 'coaching motivacional'. Implementamos ingeniería de sistemas organizacionales. Basamos nuestras decisiones en datos, marcos de trabajo probados a nivel global y experiencia ejecutiva de élite."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://clienses.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": formattedTitle,
        "item": `https://clienses.com/servicios/${p.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <Hero />
      <StrategicIntelligence />
      <AuthorityWithoutNoise />
      <MethodFramework />
      <Footer />
    </main>
  );
}
