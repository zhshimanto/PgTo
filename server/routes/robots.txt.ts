export default defineEventHandler((event) => {
  const robotsConfig = `User-agent: *
Allow: /
User-agent: GPTBot
Allow: /
Sitemap: https://pgslot-to.to/sitemap.xml`

  event.node.res.setHeader('Content-Type', 'text/plain')
  return robotsConfig
})
