<template>
  <FillLocalStorageButton @fillLocalStorage="setUsersList"/>

  <BlueButton @buttonClick="isVisibleModalWindow = !isVisibleModalWindow">
    <h1>Добавить</h1>
  </BlueButton>

  <AddUsersModal
      v-show="isVisibleModalWindow"
      @closeModalWindow="isVisibleModalWindow = false"
      @getNewUserData="addUser"
      :usersList="usersList"
  />

  <UsersTable
      @sortingUsersList="sortUsersList"
      :usersList="usersList"
  />
</template>

<script>
import BlueButton from "@/components/BlueButton";
import AddUsersModal from "@/components/AddUsersModal";
import UsersTable from "@/components/UsersTable";

import FillLocalStorageButton from "@/components/Test/FillLocalStorageButton";

import {getAllUsersFromLocalStorage} from "@/mixins/getAllUsersFromLocalStorage";
import {generateId} from "@/mixins/generateId";

export default {
  name: 'App',

  components: {
    BlueButton,
    AddUsersModal,
    UsersTable,
    FillLocalStorageButton
  },

  data() {
    return {
      isVisibleModalWindow: false,
      sortingOption: null,
      usersList: [],
    }
  },

  methods: {
    addUser(user) {
      localStorage.setItem(generateId(9).toString(), JSON.stringify(user))
      this.setUsersList()
    },

    setUsersList() {
      this.usersList = getAllUsersFromLocalStorage()
    },

    sortUsersList(title) {
      const keySorting = title === "Имя" ? "name" : "tel"

      const reverse = this.sortingOption === keySorting

      this.sortArray(this.usersList, keySorting, reverse)

      this.sortingOption = reverse ? "" : keySorting
    },

    sortArray(objectArray, title, reverse) {
      if (reverse) {
        objectArray.sort((a, b) => {
          if (a[title] > b[title]) return -1
          if (a[title] < b[title]) return 1
          return 0
        })
      } else {
        objectArray.sort((a, b) => {
          if (a[title] < b[title]) return -1
          if (a[title] > b[title]) return 1
          return 0
        })
      }
    },
  },

  mounted() {
    this.setUsersList()
  }
}
</script>
