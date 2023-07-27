<template>
  <div @click="clickOnClose" class="gray-background">
  </div>
  <div class="box-for-login">
    <button class="close-button" @click="clickOnClose">x</button>
    <div class="input-line"><p>Login</p><input type="text" class="text-input" placeholder="Login"></div>
    <div class="input-line"><p>Password</p><input type="text" class="text-input" placeholder="Password"></div>
    <div><button class="button-submit">Войти</button></div>
  </div>
</template>

<script>
export default {
  name: "LoginField",
  methods: {
    clickOnClose(){
      this.$emit('button-on-close-clicked');
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
  .input-line{
    display: flex;
    margin: auto;
  }
  .input-line p{
    text-align: left;
    width: 30%;
    margin: 0.4em;
    padding: 0.4em;

  }
  .input-line input{
    text-align: right;
    background: #D9D9D9;
    width: 70%;
    margin: 0.4em;
    border-radius: 0.4em;
    padding: 0.4em;
  }
  .button-submit{
    border-style: none;
    background: #1E282E;
    color: #D9D9D9;
    border-radius: 0.8em;
    padding: 0.4em 0.8em;
    margin: 0.4em;
  }
  .button-submit:hover{
    background: #313e44;
  }
</style>