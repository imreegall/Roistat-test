<template>
  <TableLine
      :columns="[
            {title:'Имя', width:40},
            {title:'Телефон', width:60}
            ]"
      style="cursor: pointer"
      @cellClick="title => this.$emit('headerCellClick', title)"
  />
</template>

<script>
import TableLine from "@/components/Table/Line";

export default {
  name: "TableHeader",
  components: {
    TableLine
  }
}
</script>

<style scoped>

</style>
