// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2023-11-01',
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'Tc61i_bmez5sVQDwU43aWJVrFLdjjXhobuQuV6rNwX8'
        }
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXR8H6B9" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtm.js?id=GTM-TXR8H6B9',
          async: true
        },
        {
          key: 'gtm-init',
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TXR8H6B9');
          `,
          type: 'text/javascript'
        }
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  pages: true,
  components: {
    global: true,
    dirs: ['~/components']
  },
  imports: {
    autoImport: true
  }
})
