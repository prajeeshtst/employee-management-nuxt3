export default defineNuxtConfig({
  ssr: false,
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt','nuxt-icon'],
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
