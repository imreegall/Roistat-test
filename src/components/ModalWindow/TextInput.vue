<template>
  <input
      type="text"
      @input="event => this.$emit('inputText', event.target.value)"
      :placeholder="inputPlaceholder"
  >
</template>

<script>
export default {
  name: "TextInput",
  props: [
      "inputPlaceholder",
  ]
}
</script>

<style scoped>
input {
  border: 1px solid black;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  font-family: "Calibri Light", sans-serif;
  font-size: 18px;
}
</style>
