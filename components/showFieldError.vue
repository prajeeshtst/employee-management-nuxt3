<template>
  <div class="error" v-if="error">
      {{ error }}
    </div>
</template>

<script setup>
const props = defineProps({
  error: String
})
</script>

<style scoped >
.error {
  color: #ba3939;
  font-size: 12px;
}
</style>
