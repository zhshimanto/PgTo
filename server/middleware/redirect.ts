import { defineEventHandler, getRequestURL, sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  
  // Force HTTPS
  if (url.protocol === 'http:') {
    return sendRedirect(event, `https://${url.host}${url.pathname}${url.search}`, 301)
  }

  // Remove trailing slashes except for root path
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    return sendRedirect(event, `${url.protocol}//${url.host}${url.pathname.slice(0, -1)}${url.search}`, 301)
  }
})
