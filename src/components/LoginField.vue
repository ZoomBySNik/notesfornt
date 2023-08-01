<template>
  <div @click="clickOnClose" class="gray-background">
  </div>
  <div class="box-for-login">
    <button class="close-button" @click="clickOnClose">x</button>
    <div class="input-line"><p>Email</p><input type="email" class="text-input" v-model="email" placeholder="Email">
    </div>
    <div class="input-line"><p>Пароль</p><input type="password" class="text-input" v-model="password"
                                                placeholder="Пароль"></div>
    <div>
      <button class="button-submit" @click="clickOnLogin">Войти</button>
      <button class="button-submit" @click="clickOnRegister">Регистрация</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginField",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    clickOnClose() {
      this.$emit('button-on-close-clicked');
    },
    clickOnRegister() {
      this.$emit('button-on-register-clicked')
    },
    clickOnLogin() {
      axios.get('/users', {params: {email: this.email, password: this.password}})
          .then(response => {
            // Handle the response from the server
            localStorage.token = response.data;
            console.log(response.data);
            this.clickOnClose();
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
    },
    authorizationSuccess() {
      this.$emit('authorization-success');
    },
  }
}
</script>

<style scoped>
.box-for-login {
  width: 20em;
  height: 8em;
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