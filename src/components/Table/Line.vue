<template>
  <div class="lineContainer">
    <TableCell
        v-for="item in columns"
        :key="item.title"

        @click="() => this.$emit('cellClick', item.title)"

        :style="`width: ${item.width}%`"
    >
      <h1>{{ item.title }}</h1>
    </TableCell>
  </div>
</template>

<script>
import TableCell from "@/components/Table/Cell";

export default {
  name: "TableLine",
  components: {
    TableCell
  },
  props: [
      "columns"
  ]
}
</script>

<style scoped>
.lineContainer {
  display: flex;
  border-top: 1px solid #404040;
}

.lineContainer:first-of-type {
  border-top: none;
}

.lineContainer:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
