<template>
  <div class="backgroundModal" @click.self="() => this.$emit('closeModalWindow')">
    <div class="modalWindow">
      <div class="title">
        <h1>Добавить пользователя</h1>

        <CloseButtonX @buttonClick="() => this.$emit('closeModalWindow')"/>
      </div>

      <div class="forms">
        <div class="form">
          <div class="formTitle">
            <h2>Имя</h2>
          </div>

          <InputText
              :inputPlaceholder="'Фёдор'"
              @inputText="name => newUser.name = name"
          />
        </div>

        <div class="form">
          <div class="formTitle">
            <h2>Телефон</h2>
          </div>

          <InputText
              :inputPlaceholder="'+7...'"
              @inputText="tel => newUser.tel = tel"
          />
        </div>

        <div class="form">
          <div class="formTitle">
            <h2>Начальник</h2>
          </div>

          <SelectUser
              :usersList="usersList"
              @changeSelect="parent => newUser.parent = parent"
          />
        </div>
      </div>

      <BlueButton
          @buttonClick="checkValidForm"
          :isActive="newUser.name !== '' && newUser.tel !== ''"
      >
        <h1>Сохранить</h1>
      </BlueButton>
    </div>
  </div>
</template>

<script>
import CloseButtonX from "@/components/ModalWindow/CloseButtonX";
import InputText from "@/components/ModalWindow/TextInput";
import SelectUser from "@/components/ModalWindow/UserSelect";
import BlueButton from "@/components/BlueButton";

export default {
  name: "AddUsersModal",
  components: {
    CloseButtonX,
    InputText,
    SelectUser,
    BlueButton,
  },
  props: [
      "usersList"
  ],
  data() {
    return {
      newUser: {
        name: '',
        tel: '',
        parent: 0,
      }
    }
  },
  methods: {
    checkValidForm() {
      if (this.newUser.name !== '' && this.newUser.tel !== '') {
        this.$emit('getNewUserData', this.newUser)
        this.$emit('closeModalWindow')
      }
    }
  }
}
</script>

<style scoped>
.backgroundModal {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.modalWindow {
  background-color: white;
  width: 60%;
  height: 60%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 60px;
}

.title {
  display: flex;
  justify-content: space-between;
}

.forms {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.form {
  display: flex;
  justify-content: space-between;
}

.formTitle {
  width: 40%;
}
</style>
