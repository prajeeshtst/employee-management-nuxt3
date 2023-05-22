<template>
  
  <select
    id="inputState"
    class="form-control"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option disabled :selected="selected">Choose one</option>
    <option v-for="(option, index) in options" :value="option" :key="index">
      {{ option }}
    </option>
  </select>
</template>

<script setup>
import useFormValidation from "~/modules/useFormValidation";
const props = defineProps({
  options: Array,
  propData: String,
  editMode: Boolean,
});

let input = ref("");
let selected = ref(true);
onMounted(() => {
  if (props.editMode) {
      selected.value = false;
     let element = document.getElementById('inputState');
    element.value = props.propData;
  }
});
 
const { validateSelectField, errors } = useFormValidation();
const validateInput = () => {
  validateSelectField("select", input.value);
  return { input, errors, validateInput };
};
</script>
<style lang="scss" scoped></style>
