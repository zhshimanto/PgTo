import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://pgslott.to'
  
  // Static pages
  const staticPages = [
    '',
    '/demo',
    '/free-credit',
    '/blog',
    '/promotion'
  ]

  // Get blog posts (you'll need to implement this based on your data source)
  // This is a placeholder - replace with your actual blog post fetching logic
  const blogPosts: string[] = [] // Add your blog post URLs here
  
  const allPages = [...staticPages, ...blogPosts]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})
