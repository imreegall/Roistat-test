<template>
  <div class="table">
    <TableHeader @headerCellClick="sortingOption => this.$emit('sortingUsersList', sortingOption)"/>

    <TableBody :usersList="usersList"/>
  </div>
</template>

<script>
import TableHeader from "@/components/Table/Header";
import TableBody from "@/components/Table/Body";

export default {
  name: "UserTable",
  components: {
    TableHeader,
    TableBody
  },
  props: [
      "usersList"
  ]
}
</script>

<style scoped>
.table {
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
}
</style>
