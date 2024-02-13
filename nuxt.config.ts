// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  unocss: {
    uno: true,
    preflight: true
  },
  colorMode: {
    preference: "system",
    classSuffix: ""
  },
  runtimeConfig: {
    public: {
      nuxtAppUrl: process.env.NUXT_APP_BACKED
    }
  }
})
