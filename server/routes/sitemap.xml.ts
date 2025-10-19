import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://pgslot-to.to'

  // Static pages
  const staticPages = [
    '',
    '/demo',
    '/free-credit',
    '/blog',
    '/promotions',
    '/terms-and-conditions',
    '/privacy-policy',
    '/responsible-gaming',
    '/game-manual',
    '/something-fishy-acquired'
  ]

  // Import and get blog posts from the data source
  let blogPosts: string[] = []
  try {
    const blogPostsData = await import('../../data/blog-posts.json')
    if (blogPostsData && blogPostsData.posts && Array.isArray(blogPostsData.posts)) {
      // Make sure we only include posts with valid slugs
      blogPosts = blogPostsData.posts
        .filter(post => post && post.slug && typeof post.slug === 'string')
        .map(post => `/blog/${post.slug}`)
      console.log(`Added ${blogPosts.length} blog posts to sitemap`)
    } else {
      console.error('Blog posts data structure is not as expected')
    }
  } catch (error) {
    console.error('Error loading blog posts for sitemap:', error)
  }

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
