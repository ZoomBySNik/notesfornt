<template>
  <header class="for-row">
    <div class="flex1">
      <button class="burger"></button>
      <button class="plus"></button>
    </div>
    <div class="flex2">
      <div class="search-field">
        <input type="text" class="search-input" placeholder="Поиск по тексту">
        <button class="search-button"></button>
      </div>
    </div>
    <div class="flex3"><button class="login"></button></div>
  </header>
</template>

<script>
export default {
  name: "Navbar"
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
.plus{
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
  background-color: transparent;
  border: none;
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
</style>