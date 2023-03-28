<template>
  <div class="cell">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TableCell"
}
</script>

<style scoped>
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  padding: 10px;
  word-break: break-all;
  text-align: center;
}

.cell:last-of-type {
  border-right: none;
}
</style>
