<template>
  
  <div class="form-check form-check-inline" style="margin-left: 26px;" v-for="(option,index) in gender" :key="index">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" :id="option" :value="option" @change="$emit('update:modelValue', $event.target.value)">
  <label class="form-check-label" for="inlineRadio1">{{option}}</label>
</div> 
</template>

<script setup>
import useFormValidation from "~/modules/useFormValidation";
const props = defineProps({
  gender: Array,
  propData:String,
  editMode:Boolean,
});


let input = ref("");
onMounted(() => {
  if (props.editMode) {
      let element = document.querySelectorAll('input[type=radio]');
      element.forEach(item => {
         const radio = document.getElementById(props.propData)
        if(radio){
          radio.checked = true
        }
        
      });
  }
});
const { validateSelectField, errors } = useFormValidation();
const validateInput = () => {
  validateSelectField("select", input.value);
  return { input, errors, validateInput };
};
</script>
 