<template>
  <select @change="() => this.$emit('changeSelect', getSelectedUserId())">
    <option :id="0"/>

    <option
        v-for="user in usersList"
        :key="user.id"
        :id="user.id"
    >
      {{ user.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "UserSelect",
  props: [
      "usersList",
      "callBackPropertyName",
  ],
  methods: {
    getSelectedUserId() {
      const userId = Array.from(document.getElementsByTagName('option'))
          .filter(item => item.selected)[0]
          .id

      return Number(userId)
    }
  }
}
</script>

<style scoped>
select {
  font-family: "Calibri Light", sans-serif;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  width: 100%;
}
</style>
