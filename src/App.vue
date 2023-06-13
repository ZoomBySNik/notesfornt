<script setup>
import NoteInGrid from "./components/NoteInGrid.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <div class="grid-for-notes">
    <NoteInGrid></NoteInGrid>
    <NoteInGrid></NoteInGrid>
    <NoteInGrid></NoteInGrid>
    <NoteInGrid></NoteInGrid>
  </div>
</template>
<style scoped>
.grid-for-notes{
  padding:  3.6em;
  display: grid;
}
</style>
