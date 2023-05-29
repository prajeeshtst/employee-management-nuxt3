<template>
  <div
    class="form-check form-check-inline"
    style="margin-left: 26px"
    v-for="(option, index) in radioData"
    :key="index"
  >
    <input
      :class="disabled ? 'form-check-input disabled' : 'form-check-input'"
      type="radio"
      name="inlineRadioOptions"
      :id="option"
      :value="option"
      @change="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
    />
    <label class="form-check-label" for="inlineRadio1">{{ option }}</label>
  </div>
</template>

<script setup lang="ts">
 const props = defineProps({
  radioData: {
    type: Array,
    required: true,
    default: ["Male", "Female"],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  propData: String,
  editMode: Boolean,
});

let input = ref("");
onMounted(() => {
  if (props.editMode) {
    let element = document.querySelectorAll("input[type=radio]");
    element.forEach((item) => {
      const radio = document.getElementById(props.propData);
      if (radio) {
        radio.checked = true;
      }
    });
  }
}); 
</script>
<style>
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
