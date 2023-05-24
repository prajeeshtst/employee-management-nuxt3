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
    required: true,
    type: Function,
  },
  style: {
    default: "",
    type: String,
  },
  customType: {
    default: "button",
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
  props.size === "small" || props.size === "xsmall"
    ? classes.push("icon-small")
    : "";
  return classes.join(" ");
});
</script>
<style>
.c-button {
  display: inline-block;
  padding: 0.5em 1.7em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  background-color: rgb(80, 10, 172);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
}
.c-button:hover {
  border-color: rgb(255, 255, 255);
}
 
</style>
