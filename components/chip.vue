<template>
  <div>
    <span :class="`chip ${cChipClass}`" >
      <slot name="icon" ></slot>
       <span><slot></slot></span>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    default:"primary",
    type: String,
    required: true,
  },
   disabled: {
    default:false,
    type: Boolean, 
  },
});
const cChipClass = computed(() => {
  const Cchip = ["c-chip"];
  Cchip.push(`${props.variant}`);
  props.disabled ? Cchip.push("disabled") : "";
  return Cchip.join(" ");
});
</script>

<style lang="scss" scoped>
.chip {
  padding: 8px 10px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  margin: 0 10px;

  cursor: pointer;
}

.chip.primary {
  background: #26b302;
  color: whitesmoke;
}
.chip.secondary {
  background: #b30202;
  color: whitesmoke;
}
.chip.warning {
  background: #ecde0e;
  color: whitesmoke;
}
.chip.info {
  background: #0e2fec;
  color: whitesmoke;
}
</style>
