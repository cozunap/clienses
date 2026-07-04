import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getInsightData, getAllInsightSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllInsightSlugs();
  return slugs.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  try {
    const postData = await getInsightData(p.slug);
    return {
      title: `${postData.title} | Clienses Insights`,
      description: postData.excerpt,
      openGraph: {
        title: postData.title,
        description: postData.excerpt,
        type: "article",
        publishedTime: postData.date,
        authors: [postData.author],
      }
    };
  } catch {
    return {
      title: "Insight Not Found",
    }
  }
}

export default async function InsightPost({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  let postData;
  try {
    postData = await getInsightData(p.slug);
  } catch {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <Section className="pt-32 pb-20 arch-grid">
          <Container>
            <article className="max-w-4xl mx-auto space-y-12">
              <header className="space-y-6 border-b border-text-main/10 pb-10">
                <div className="flex items-center gap-4 text-[11px] font-black text-primary tracking-[0.2em] uppercase">
                  <span>{postData.date}</span>
                  <span>•</span>
                  <span>{postData.author}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase text-text-main leading-tight">
                  {postData.title}
                </h1>
              </header>
              <div 
                className="prose prose-lg prose-headings:font-black prose-headings:uppercase prose-headings:text-text-main prose-p:text-text-main/80 prose-p:font-light prose-a:text-primary prose-a:font-bold prose-strong:text-text-main prose-strong:font-black max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </article>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
