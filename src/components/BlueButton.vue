<template>
  <button
      @click="() => this.$emit('buttonClick')"
      :disabled="!isActive"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BlueButton",
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
button {
  background-color: dodgerblue;
  padding: 8px 32px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #49a2ff;
}

button:active {
  background-color: #369bff;
}

button:disabled {
  background-color: #5b7181;
  cursor: default;
}
</style>
