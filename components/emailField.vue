<template>
   {{propData}}
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
import useFormValidation from "~/modules/useFormValidation";

const props = defineProps({
  propData:String,
})
let input = ref("");
 props.propData ? (input = props.propData) : "";

const { validateEmailField, errors } = useFormValidation();
const validateInput = () => {
  validateEmailField("email", input.value);
  return { input, errors, validateInput };
};
</script>
