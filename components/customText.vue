<template>
   <input
    type="text"
    class="form-control"
    autocomplete="off"
    @input="$emit('update:modelValue', $event.target.value)"
    v-model="input"
    @keyup="validateInput"
    @blue="validateInput"
  />
  <show-field-error v-if="error" :error="error" />
</template>
<script setup>
const props = defineProps({
  propData: String,
});
let input = ref("");
let error = ref("");
props.propData ? (input = props.propData) : "";
const validateInput = () => {
  error.value = input.value === "" ? "The Input field is required" : "";
  console.log("the error input", error.value);
  return { input, error, validateInput };
};
</script>
