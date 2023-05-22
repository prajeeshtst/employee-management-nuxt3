export default defineNuxtConfig({
  ssr: false,
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt','nuxt-icon'],
  css: [
    // CSS file in the project
    '~/assets/css/main.css',
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  imports: {
    dirs: ['store'],
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
});
