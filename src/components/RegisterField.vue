<template>
  <div @click="clickOnClose" class="gray-background">
  </div>
  <div class="box-for-register">
    <button class="close-button" @click="clickOnClose">x</button>
    <div class="input-line"><p>Фамилия</p><input type="text" class="text-input" v-model="surname" placeholder="Фамилия">
    </div>
    <div class="input-line"><p>Имя</p><input type="text" class="text-input" v-model="name" placeholder="Имя"></div>
    <div class="input-line"><p>Отчество</p><input type="text" class="text-input" v-model="patronymic"
                                                  placeholder="Отчество"></div>
    <div class="input-line"><p>Дата рождения</p><input type="date" class="text-input" v-model="dateOfBirth"
                                                       placeholder="Дата рождения"></div>
    <div class="input-line"><p>Email</p><input type="email" class="text-input" v-model="email" placeholder="Email">
    </div>
    <div class="input-line"><p>Пароль</p><input type="password" class="text-input" v-model="password"
                                                placeholder="Пароль"></div>
    <div class="input-line"><p>Пароль ещё раз</p><input type="password" class="text-input" v-model="repeatPassword"
                                                        placeholder="Пароль ещё раз"></div>
    <div>
      <button class="button-submit" @click="registerUser">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterField",
  data() {
    return {
      surname: "",
      name: "",
      patronymic: "",
      dateOfBirth: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    clickOnClose() {
      this.name = "";
      this.surname = "";
      this.patronymic = "";
      this.dateOfBirth = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.$emit('button-on-close-clicked');
    },
    registerUser() {
      const userData = {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        dateOfBirth: this.dateOfBirth,
        email: this.email,
        password: this.password,
        repeatPassword: this.repeatPassword,
      };

      axios.post('/users', userData)
          .then(response => {
            // Handle the response from the server
            localStorage.setItem('token', response.data);
            console.log(response.data);
            window.location.reload();
            this.clickOnClose();
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
    },
  }
}
</script>

<style scoped>
.box-for-register {
  width: 30em;
  height: 22em;
  padding: 2em;
  background-color: #C6C6C6;
  position: fixed;
  margin: auto;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 1.6em;
  box-shadow: 0 0 0.8em rgba(0, 0, 0, 0.6);
}
</style>