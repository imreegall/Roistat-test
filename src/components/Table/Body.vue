<template>
  <div
      class="childrenContainer"
      :style="`background-color: ${color}`"

      v-if="usersList.filter(item => item.parent.toString() === this.parentId).length"
  >
    <template
        v-for="user in usersList.filter(item => item.parent.toString() === this.parentId)"
        :key="user.id"
    >
      <template v-if="usersList.filter(item => item.parent.toString() === user.id.toString()).length">
        <TableLine
            @click="event => event.currentTarget.nextElementSibling.classList.toggle('visible')"

            :columns="[
              {title:'+ ' + user.name, width:40},
              {title:user.tel, width:60}
              ]"

            style="cursor: pointer"
        />

        <TableBody
            :usersList="usersList"
            :color="getRainbowColorByNumber(layerLevel)"
            :layerLevel="layerLevel + 1"
            :parentId="user.id"

            style="display: none"
        />
      </template>

      <template v-else>
        <TableLine
            :columns="[
              {title:user.name, width:40},
              {title:user.tel, width:60}
              ]"
        />
      </template>
    </template>
  </div>
</template>

<script>
import TableLine from "@/components/Table/Line";

import {getRainbowColorByNumber} from "@/mixins/getRainbowColorByNumber";

export default {
  name: "TableBody",
  components: {
    TableLine
  },
  props: {
      usersList: Array,
      parentId: {
        type: String,
        default: "0",
      },
      color: {
        type: String,
        default: "transparent",
      },
      layerLevel: {
        type: Number,
        default: 0,
      }
  },
  data() {
    return {
      isChildrenVisible: false,
      getRainbowColorByNumber
    }
  }
}
</script>

<style scoped>
.childrenContainer {
  border-top: 1px solid black;
}

.childrenContainer.visible {
  display: block !important;
}
</style>
