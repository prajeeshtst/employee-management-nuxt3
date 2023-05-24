
<template>
 <div
    class="form-check form-check-inline" 
    v-for="(item, index) in items"
    :key="index"
  >
   <label class="checkbox-label">
     <input type="checkbox" :value="item" :id="item" v-model="markedValues" class="checkbox-input" @input="inputChange" />
    <span class="checkbox-custom"></span>
    {{ item }}
  </label>
</div>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  checkClass: {
    type: String,
    default: "",
  },
  valuesSelected: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "",
  },
  colour: {
    type: String,
    default: "",
  },
});

const markedValues = ref(props.valuesSelected);

const customColor = ref(props.colour);

const emit = defineEmits(["update:selectedValues"]);

watch(markedValues, (newValues) => {
  emit("update:selectedValues", newValues);
});

// const inputChange = (event) => {
//   emit("update:selectedValues", markedValues.value);
// };

 
</script>
<style scoped>
.checkbox-container {
  display: inherit;
}
input {
  display: none;
}
.label-radio {
  margin-bottom: 10px;
  display: block;
  font-weight: bold;
}
.checkbox-label {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 8px;
  position: relative;
}

.checkbox-custom::before {
  content: "";
  width: 10px;
  height: 10px;
  background-color: v-bind(customColor);
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.checkbox-input:checked + .checkbox-custom::before {
  opacity: .5;
}

 
</style>
