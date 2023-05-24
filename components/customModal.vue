<template>
  <!-- The Modal -->
  <div id="myModal" class="modal" style="display: block" v-show="showModal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{modalTitle}}</h5>
        
      </div>
      <p class="modal-text">{{modalData}}</p>
      <div class="modal-footer">
        <custom-button
          :onClick="confirm"
          :variant="'primary'"
          :rounded="true"
          :style="'font-size: 13px'"
          :customType="'button'"
        >
          {{confirmButton}}</custom-button
        >
        <custom-button
        :onClick="cancel"
        :variant="'secondary'"
        :rounded="true"
        :style="'font-size: 13px'"
        :customType="'button'"
      >
        {{cancelButton}}</custom-button
      >
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  modalHeadingSize:{
    required: true,
    type: String,
    default:'medium'
  },
  showModal:{
    required:true,
    type:Boolean,
    default:false
  },
  modalTitle :{
    required: true,
    type: String,
    default:'Modal Title'
  },
  modalData:{
    required: true,
    type: String,
    default:'data'
  },  
  confirmButton:{
    required: true,
    type: String,
    default:'Confirm'
  }, 
  cancelButton: {
    required: true,
    type: String,
    default:'Cancel'
  },
})
const emit = defineEmits(['confirmPopup','cancelPopup'])

const confirm = ()=>{
emit('confirmPopup', true)

  // $emit("confirm", true);
}
const cancel = () =>{
  emit('cancelPopup',false) 
}
</script>

<style lang="scss" scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 25%;
}
.modal-title {
  font-size: 20px;
}
.modal-text {
  font-size: 17px;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.modal-footer {
  margin-top: 1rem;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
