export default defineEventHandler((event) => {
  const robotsConfig = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.1; +https://openai.com/gptbot
Allow: /

Sitemap: https://pgslot-to.to/sitemap.xml`

  event.node.res.setHeader('Content-Type', 'text/plain')
  return robotsConfig
})
