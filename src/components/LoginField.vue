<template>
  <div @click="clickOnClose" class="gray-background">
  </div>
  <div class="box-for-login">
    <button class="close-button" @click="clickOnClose">x</button>
    <div class="input-line"><p>Email</p><input type="text" class="text-input" placeholder="Email"></div>
    <div class="input-line"><p>Пароль</p><input type="text" class="text-input" placeholder="Пароль"></div>
    <div>
      <button class="button-submit">Войти</button>
      <button class="button-submit" @click="clickOnRegister">Регистрация</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginField",
  methods: {
    clickOnClose(){
      this.$emit('button-on-close-clicked');
    },
    clickOnRegister(){
      this.$emit('button-on-register-clicked')
    }
  }
}
</script>

<style scoped>
.box-for-login{
  width: 20em;
  height: 8em;
  padding: 2em;
  background-color: #C6C6C6;
  position: fixed;
  margin: auto;
  z-index: 1000;
  top: 0; left: 0; bottom: 0; right: 0;
  border-radius: 1.6em;
  box-shadow: 0 0 0.8em rgba(0, 0, 0, 0.6);
}
</style>