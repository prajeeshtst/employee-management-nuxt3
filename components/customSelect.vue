<template>
  <select
    id="inputState"
    class="form-control"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="(option, index) in options" :value="option" :key="index">
      {{ option }}
    </option>
  </select>
</template>

<script setup>
import useFormValidation from "~/modules/useFormValidation";
const props = defineProps({
  options: Array,
  propData:String
});

let input = ref("");
props.propData ? (input = props.propData) : "";

const { validateSelectField, errors } = useFormValidation();
const validateInput = () => {
  validateSelectField("select", input.value);
  return { input, errors, validateInput };
};
</script>
<style lang="scss" scoped></style>
