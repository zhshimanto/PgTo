export default defineEventHandler((event) => {
  const robotsConfig = `User-agent: *
Allow: /

Sitemap: https://pgslott.to/sitemap.xml`

  event.node.res.setHeader('Content-Type', 'text/plain')
  return robotsConfig
})
