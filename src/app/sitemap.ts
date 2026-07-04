import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://clienses.com";

    // Since this is a single page application with multiple languages managed via context,
    // we provide the root URL. If there are dedicated subpages or subdomains, add them here.
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
