import { defineEventHandler, getRequestURL, sendRedirect, getHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  const xForwardedProto = getHeader(event, 'x-forwarded-proto')
  
  // Force HTTPS - check both direct protocol and X-Forwarded-Proto header
  if (url.protocol === 'http:' || xForwardedProto === 'http') {
    const secureUrl = `https://${url.host}${url.pathname}${url.search}`
    return sendRedirect(event, secureUrl, 301)
  }

  // Remove trailing slashes except for root path
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    const noTrailingSlashUrl = `${url.protocol}//${url.host}${url.pathname.slice(0, -1)}${url.search}`
    return sendRedirect(event, noTrailingSlashUrl, 301)
  }
})
