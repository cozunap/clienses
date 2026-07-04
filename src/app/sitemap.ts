import { MetadataRoute } from 'next';
import { getAllInsightSlugs } from '@/lib/markdown';

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

    return [...routes, ...insightRoutes];
}
