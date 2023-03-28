<template>
  <div class="button" @click="() => this.$emit('buttonClick')">
    <div class="line line1"></div>
    <div class="line line2"></div>
  </div>
</template>

<script>
export default {
  name: "CloseButtonX"
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.button:active {
  background-color: rgba(0, 0, 0, 0.1);
}

.line {
  width: 6px;
  height: 30px;
  position: absolute;
  background-color: black;
  border-radius: 3px;
}

.line1 {
  transform: rotate(45deg);
}

.line2 {
  transform: rotate(-45deg);
}
</style>
