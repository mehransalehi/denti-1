export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Denti - Better Smile',
      meta: [{ name: 'description', content: 'Dental clinic landing page built with Nuxt, Tailwind CSS, and daisyUI.' }]
    }
  }
})
