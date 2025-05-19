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

  // Import and get blog posts from the data source
  const blogPostsData = await import('../../data/blog-posts.json')
  const blogPosts: string[] = blogPostsData.posts.map(post => `/blog/${post.slug}`)
  
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
