<template>
  <BlueButton @buttonClick="() => {
    fillLocalStorage()
    this.$emit('fillLocalStorage')
  }">
    <h1>[Test] Заполнить localStorage</h1>
  </BlueButton>
</template>

<script>
import BlueButton from "@/components/BlueButton";
import {fillLocalStorage} from "@/mixins/fillLocalStorage";

export default {
  name: "FillLocalStorageButton",
  components: {
    BlueButton
  },
  data() {
    return {
      fillLocalStorage
    }
  }
}
</script>

<style scoped>

</style>
