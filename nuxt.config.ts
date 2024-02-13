// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode'],
  unocss: {
    uno:true,
    preflight: true,
  },
  colorMode: {
    preference: "system",
    classSuffix: ""
  }
})
