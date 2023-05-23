<template>
  <button
    :type="customType"
    :class="customButtonClass"
    @click="onClick"
    :style="style"
    :disabled="disabled"
  >
  <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    default: "primary",
    type: String,
  },
  size: {
    default: "medium",
    type: String,
  },
  rounded: {
    default: false,
    type: Boolean,
  },
  onClick: {
    required:true,
    type: Function,
  },
  style: {
    default:"",
    type: String,
  },
  customType: {
    default:"button",
    type: String,
  },
  disabled: {
     default: false,
    type: Boolean,
  },
});

  const customButtonClass = computed(() => {
  const cButton = ["c-button"];
  cButton.push(`${props.variant}`);
  cButton.push(`rounded-${props.rounded ? "full" : "none"}`);
  cButton.push(`${props.size}`);
  return cButton.join(" ");
});
const customIconClass = computed(() => {
  const classes = ["c-button-icon"];
  props.size==="small"||props.size === "xsmall" ?  classes.push("icon-small"):'';
  return classes.join(" ");
});
</script>
<style>
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
