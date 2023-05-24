<template>
  <select
    id="inputState"
    class="form-control"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option disabled :selected="selected">{{ placeholder }}</option>

    <option v-for="(option, index) in options" :value="option" :key="index">
      {{ option }}
    </option>
  </select>
</template>

<script setup>
 const props = defineProps({
  placeholder: {
    type:String, 
    default:'Choose one'
  },
  modelValue: {
    type: String,
    default: "",
  },
  options:{
    type:Array,
    required: true,
    default: []
  },
  editMode : {
    required:true,
    type:Boolean,
    default:false
  }, 
});

let input = ref("");
let selected = ref(true);
onMounted(() => {
  if (props.editMode) {
    selected.value = false;
    let element = document.getElementById("inputState");
    element.value = props.propData;
  }
});

 
</script>
<style lang="scss" scoped></style>
