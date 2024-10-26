// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@element-plus/nuxt',
    '@vee-validate/nuxt'
  ],
  css: ['./assets/style.scss'],
  plugins: [
    './plugins/iconify.js'
  ],
})