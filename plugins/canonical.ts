import { defineNuxtPlugin, useRuntimeConfig, useRoute } from '#app'

export default defineNuxtPlugin({
  name: 'canonical',
  setup(nuxtApp) {
    const config = useRuntimeConfig()
    const route = useRoute()
    const baseUrl = config.public.siteUrl

    nuxtApp.hook('app:mounted', () => {
      const updateCanonical = () => {
        const path = route.path
        const canonicalUrl = `${baseUrl}${path === '/' ? '' : path}`.replace(/\/$/, '')
        
        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]')
        if (!canonicalLink) {
          canonicalLink = document.createElement('link')
          canonicalLink.setAttribute('rel', 'canonical')
          document.head.appendChild(canonicalLink)
        }
        canonicalLink.setAttribute('href', canonicalUrl)

        // Update og:url meta
        let ogUrl = document.querySelector('meta[property="og:url"]')
        if (!ogUrl) {
          ogUrl = document.createElement('meta')
          ogUrl.setAttribute('property', 'og:url')
          document.head.appendChild(ogUrl)
        }
        ogUrl.setAttribute('content', canonicalUrl)
      }

      // Update canonical on initial load
      updateCanonical()

      // Update canonical on route changes
      nuxtApp.hook('page:finish', () => {
        updateCanonical()
      })
    })
  }
})
