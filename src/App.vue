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
  padding:  4em 3.8em;
}
.grid-for-notes{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.8em;
  grid-auto-rows: auto;
}
@media (max-width: 1400px) {
  .grid-for-notes{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.4em;
  }
}
@media (max-width: 1100px) {
  .grid-for-notes{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.2em;
  }
}
@media (max-width: 750px) {
  .grid-for-notes{
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2em;
  }
}
</style>
