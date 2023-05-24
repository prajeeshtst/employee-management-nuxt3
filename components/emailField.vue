<template>
  <input
    type="email"
    class="form-control"
    autocomplete="off"
    @input="$emit('update:modelValue', $event.target.value)"
    v-model="input"
    @keyup="validateInput"
    @blur="validateInput"
  />

  <show-field-error v-if="errors.email" :error="errors.email" />
</template>
<script setup>
 
const props = defineProps({
  propData:String,
})
let input = ref("");
 props.propData ? (input = props.propData) : "";
 
</script>
