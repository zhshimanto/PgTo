import { defineEventHandler, getRequestURL, sendRedirect, getHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  const xForwardedProto = getHeader(event, 'x-forwarded-proto')
  const host = getHeader(event, 'host') || 'pgslott.to'
  const needsHttps = url.protocol === 'http:' || xForwardedProto === 'http'
  const needsTrailingSlashRemoval = url.pathname.length > 1 && url.pathname.endsWith('/')
  
  // Prevent redirect loops
  if (url.protocol === 'https:' && !url.pathname.endsWith('/') && host === 'pgslott.to') {
    return
  }

  // Only redirect if needed
  if (needsHttps || needsTrailingSlashRemoval) {
    const protocol = 'https'
    const pathname = needsTrailingSlashRemoval ? url.pathname.slice(0, -1) : url.pathname
    const redirectUrl = `${protocol}://pgslott.to${pathname}${url.search}`
    return sendRedirect(event, redirectUrl, 301)
  }
})
