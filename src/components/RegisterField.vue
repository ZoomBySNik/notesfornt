<template>
  <div @click="clickOnClose" class="gray-background">
  </div>
  <div class="box-for-register">
    <button class="close-button" @click="clickOnClose">x</button>
    <div class="input-line"><p>Фамилия</p><input type="text" class="text-input" placeholder="Фамилия"></div>
    <div class="input-line"><p>Имя</p><input type="text" class="text-input" placeholder="Имя"></div>
    <div class="input-line"><p>Отчество</p><input type="text" class="text-input" placeholder="Отчество"></div>
    <div class="input-line"><p>Дата рождения</p><input type="date" class="text-input" placeholder="Отчество"></div>
    <div class="input-line"><p>Email</p><input type="email" class="text-input" placeholder="Email"></div>
    <div class="input-line"><p>Пароль</p><input type="password" class="text-input" placeholder="Пароль"></div>
    <div class="input-line"><p>Пароль ещё раз</p><input type="password" class="text-input" placeholder="Пароль ещё раз"></div>
    <div>
      <button class="button-submit">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterField",
  methods: {
    clickOnClose(){
      this.$emit('button-on-close-clicked');
    }
  }
}
</script>

<style scoped>
.box-for-register{
  width: 30em;
  height: 23em;
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