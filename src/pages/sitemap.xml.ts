import { getCollection } from 'astro:content';

export async function GET() {
  const site = 'https://jawahar.dev';

  const posts = await getCollection('blog');
  const bytes = await getCollection('bytes');

  const staticPages = [
    { url: `${site}/`, lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
    { url: `${site}/articles/`, lastmod: new Date().toISOString().split('T')[0], priority: '0.9' },
    { url: `${site}/bytes/`, lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
    { url: `${site}/videos/`, lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
    { url: `${site}/about/`, lastmod: new Date().toISOString().split('T')[0], priority: '0.6' },
  ];

  const articlePages = posts.map(post => ({
    url: `${site}/articles/${post.slug}/`,
    lastmod: post.data.date.toISOString().split('T')[0],
    priority: '0.8',
  }));

  const allPages = [...staticPages, ...articlePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
