<template>
 
  <button :type="customType" :class="customClass"  @click="onClick" :style="style" :disabled="disabled"> <slot></slot></button>
 </template>

<script setup>
const props = defineProps({
   onClick: {
      type: Function,
     },
    customClass: {
      type:String,
      required: true
    },
    style:{
      type: String
    },
    customType:{
      type:String
    },
    disabled:{
       type: Boolean
    }
})
</script>

<style lang="scss" scoped>

</style>
