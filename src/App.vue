<script setup>
import NoteInGrid from "./components/NoteInGrid.vue";
</script>

<template>
  <header>
    <button class="burger"></button>
    <div class="search-field"><input type="text" class="search-input"></div>
    <button class="login"></button>
  </header>
  <div class="grid-for-notes"><NoteInGrid></NoteInGrid></div>
</template>
<style scoped>
header{
  height: 4em;
  width: auto;
  background: #D9D9D9;
  padding:  0.5em 3.6em;
}
.burger{
  background-image: url("./assets/hamburger.png");
  background-size: contain;
  background-color: transparent;
  border: none;
  width: 2.25em;
  height: 2.25em;
  margin: 0.875em 0;
  display: inline-block;
}
.search-field{
  display: inline-block;
}
.grid-for-notes{
  padding:  3.6em;
}
</style>
