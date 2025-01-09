// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@element-plus/nuxt',
    '@vee-validate/nuxt',
    'nuxt-graphql-client',
     '@pinia/nuxt'
  ],
  css: [
    './assets/style.scss',
  ],
  plugins: [
    './plugin/iconify.js',
    './plugin/toast.ts',
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://api.escuelajs.co/graphql'
    }
  }
})