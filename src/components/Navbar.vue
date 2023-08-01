<template>
  <header class="for-row">
    <div class="flex1">
      <button class="burger" @click="toggleMenu"></button>
      <button class="add-note-button"></button>
    </div>
    <div class="flex2">
      <div class="search-field">
        <input type="text" class="search-input text-input" placeholder="Поиск по тексту">
        <button class="search-button"></button>
      </div>
    </div>
    <div class="flex3"><button class="login" @click="isLoginOpen=!isLoginOpen"></button></div>
  </header>
  <ul class="hidden-menu" v-if="isMenuOpen">
    <li @click="toggleMenu" v-for="label in labels"><a>{{ label.title }}</a></li>
    <li class="for-row">
      <input type="text" placeholder="Добавить папку" class="text-input tag-add-input">
      <button class="add-label-button"></button>
    </li>
  </ul>
  <LoginField
      style="position: relative" v-if="isLoginOpen"
      @button-on-close-clicked="isLoginOpen=!isLoginOpen" @button-on-register-clicked="openRegister"
  >
  </LoginField>
  <RegisterField
      style="position: relative" v-if="isRegisterOpen"
      @button-on-close-clicked="isRegisterOpen=!isRegisterOpen"
  >
  </RegisterField>
</template>

<script>

import LoginField from '@/components/LoginField.vue';
import RegisterField from "@/components/RegisterField.vue";

export default {
  components: {RegisterField, LoginField},
  data() {
    return {
      isMenuOpen: this.isOpen,
      isLoginOpen: false,
      isRegisterOpen: false,
    };
  },
  name: "Navbar",
  methods:{
    toggleMenu: function () {
      this.isMenuOpen = !this.isMenuOpen;
      console.log('toggleMenu');
    },
    openRegister: function () {
      this.isLoginOpen = false;
      this.isRegisterOpen = true;
      console.log('openRegister');
    },

  },
  props:{
    isOpen: {
      type:Boolean,
      required: false,
      default: false
    },
    labels: Array
  }
}
</script>

<style scoped>
header{
  height: 3em;
  width: auto;
  background: #D9D9D9;
  padding:  0.5em 3.8em;
}
.flex1{
  text-align: left;
  width: 35%;
}
.flex2{
  text-align: center;
  width: 30%;
}
.flex3{
  text-align: right;
  width: 35%;
  margin: 0;
}
.burger{
  background-image: url("../assets/hamburger.png");
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 2em;
  height: 2em;
  margin: 0.4em 0;
}
.add-note-button{
  background-image: url("../assets/free-icon-pencil-4409398.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 2em;
  height: 2em;
  margin: 0.4em 2.4em;
}
.search-field{
  background-color: #EEEEEE;
  height: 3em;
  border-radius: 1.2em;
  display: flex;
}
.search-input{
  height: 2em;
  width: 100%;
  margin: 0.5em 0 0.5em 0.5em;
}
.search-button{
  background-image: url("../assets/free-icon-magnifier-2319177.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 2.25em;
  height: 2.25em;
  margin-right: 0.5em;
}
.login
{
  background-image: url("../assets/account.png");
  background-size: 50%;
  background-color: #EEEEEE;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  width: 3em;
  height: 3em;
  border-radius: 100%;
}
.hidden-menu {
  margin-left: 1.9em;
  margin-top: 2em;
  width: 20%;
  position: fixed;
  list-style: none;
  border-radius: 1em;
  background-color: #D9D9D9;
  box-shadow: 0 0 0.8em rgba(0, 0, 0, 0.6);
  padding: 0.4em;
  color: #1E282E;
  z-index: 1000;
}
.hidden-menu li {
  padding: 0.4em;
}
.hidden-menu li a{
  color: inherit;
  text-decoration: none;
}
.add-label-button{
  background-image: url("../assets/free-icon-font-plus-3917757.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 1.2em;
  height: 1.2em;
}

.tag-add-input {
  width: 90%;
  text-align: left;
}
</style>