import { MetadataRoute } from 'next';
import { getAllInsightSlugs } from '@/lib/markdown';
import { PREDEFINED_SLUGS } from '@/lib/servicios';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://clienses.com";

    // Static core pages
    const routes = [
        '',
        '/about',
        '/strategy',
        '/intelligence',
        '/expansion',
        '/insights'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Insight pages
    const insightSlugs = getAllInsightSlugs();
    const insightRoutes = insightSlugs.map((insight) => ({
        url: `${baseUrl}/insights/${insight.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic Servicios pages
    const serviciosRoutes = PREDEFINED_SLUGS.map((slug) => ({
        url: `${baseUrl}/servicios/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...insightRoutes, ...serviciosRoutes];
}
