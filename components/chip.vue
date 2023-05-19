<template>
  <div>
    <span :class="customClass">
      <slot>Default Slot</slot>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  customClass: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.chip {
  padding: 8px 10px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  margin: 0 10px;

  cursor: pointer;
}

.chip.primary {
  background: #26b302;
  color: whitesmoke;
}
.chip.secondary {
  background: #b30202;
  color: whitesmoke;
}
</style>
