// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2023-11-01',
  app: {
    head: {
      titleTemplate: '%s',
      title: 'PG SLOT TO เว็บลิขสิทธิ์แท้โบนัสแจ็กพอตแตกง่ายที่สุด 2025',
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
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'PG Vegas',
            url: 'https://pgslott.to',
            description: 'บทความสล็อตมัดรวมข้อมูลความรู้พร้อมเทคนิคทำเงินดี ๆ และอัปเดตเกมใหม่ล่าสุดที่นักเดิมพันทุกระดับไม่ควรพลาด บทความสล็อตออนไลน์ทำไมถึงมีความสำคัญที่จำเป็นต้องอ่านคลิก',
            potentialAction: {
              '@type': 'SearchAction',
              'target': 'https://pgslott.to/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots'
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://pgslott.to'
    }
  },
  nitro: {
    prerender: {
      routes: ['/robots.txt']
    }
  },
  robots: {
    debug: true,
    sitemap: 'https://pgslott.to/sitemap.xml',
    allow: ['/']
  },
  css: ['~/assets/css/main.css'],
  imports: {
    autoImport: true
  }
})