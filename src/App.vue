<script setup>
import NoteInGrid from "./components/NoteInGrid.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <div class="side-bar"></div>
  <div class="content">
    <div class="grid-for-notes">
      <NoteInGrid></NoteInGrid>
      <NoteInGrid></NoteInGrid>
      <NoteInGrid></NoteInGrid>
      <NoteInGrid></NoteInGrid>
    </div>
  </div>
</template>
<style scoped>
.content{
  padding:  4.2em 3.8em;
}
.grid-for-notes{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.8em;
}
</style>
