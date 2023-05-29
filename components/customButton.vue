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

<script setup lang="ts">
interface CButton {
		variant: string,
		size: string,
		rounded: Boolean | false,
		onClick: Boolean | true,
    style:String | '',
    customType: String | "button",
    isLoading: Boolean | false,
    disabled : Boolean | false
	}

	const props = withDefaults(defineProps<CButton>(),{});
// const props = defineProps({
//   variant: {
//     default: "primary",
//     type: String,
//   },
//   size: {
//     default: "medium",
//     type: String,
//   },
//   rounded: {
//     default: false,
//     type: Boolean,
//   },
//   onClick: {
//     required: true,
//     type: Function,
//   },
//   style: {
//     default: "",
//     type: String,
//   },
//   customType: {
//     default: "button",
//     type: String,
//   },
//   isLoading: {
//     default: false,
//     type: Boolean,
//   },
//   disabled: {
//     default: false,
//     type: Boolean,
//   },
// });

const customButtonClass = computed(() => {
  const cButton = ["c-button"];
  cButton.push(`${props.variant}`);
  cButton.push(`rounded-${props.rounded ? "full" : "none"}`);
  cButton.push(props.isLoading?'button--loading':'')
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
.buttonload {
  background-color: #04aa6d; /* Green background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 24px; /* Some padding */
  font-size: 16px; /* Set a font-size */
}
.button {
  position: relative;
  padding: 8px 16px;
  background: #009579;
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
}

.button:active {
  background: #007a63;
}

.button__text {
  font: bold 20px "Quicksand", san-serif;
  color: #ffffff;
  transition: all 0.2s;
}

.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
}

.button--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
