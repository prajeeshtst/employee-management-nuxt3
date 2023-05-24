<template>
    <input
    :type="text"
    class="form-control"
    :autocomplete="autocomplete"
    @input="$emit('update:modelValue', $event.target.value)"
    v-model="input"
    :placeholder="placeholder"
    @keyup="validateInput"
    @blue="validateInput"
    :disabled="disableField"
  />
  <show-field-error v-if="error" :error="error" />
</template>
<script setup>
 const props = defineProps({
  editData:{
   type:String,
   default:''
  },
  type:{
    type:String,
    required:true,
    default: 'text'
  },
  autocomplete:{
    type:Boolean,
    required:true,
    default:'off'
  },
  placeholder :{
    type:String,
    default:'Enter value',
    required:true
  },
   disableField:{
     type:Boolean,
     required:true,
     default:false}
});
let input = ref(props.editData);
let error = ref("");
  
</script>
