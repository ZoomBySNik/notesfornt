<script>
import Navbar from "@/components/Navbar.vue";
import NoteInGrid from "@/components/NoteInGrid.vue";
import axios from "axios";

export default {
  components: {NoteInGrid, Navbar},
  data() {
    return {
      notes: [],
      labels: [],
    };
  },
  computed: {
    pinnedNotes() {
      return this.notes.filter(note => note.isPinned);
    },
    unpinnedNotes() {
      return this.notes.filter(note => !note.isPinned);
    },
    loggedUser() {
      return localStorage.getItem('token') !== null;
    },
  },
  beforeMount() {
    if (this.loggedUser) {
      axios.get('/labels')
          .then(response => {
            this.labels = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      axios.get('/notes')
          .then(response => {
            this.notes = response.data;
            this.notes.forEach(note => {
              axios.get('/notes/'+note.id+'/labels', {data: {noteId: note.id}})
                  .then(response => {
                    note.labels = response.data;
                  })
                  .catch(error => {
                    console.error(error);
                  });
            })
          })
          .catch(error => {
            console.error(error);
          });

    }
  },
  beforeUnmount() {
    localStorage.removeItem('token');
  }
};
</script>

<template>
  <Navbar :labels="labels" :isLogged="loggedUser"></Navbar>
  <div class="content">
    <div v-if="loggedUser">
      <div v-if="notes.length !== 0">
        <div class="grid-for-notes">
          <NoteInGrid v-for="note in pinnedNotes" :note="note"></NoteInGrid>
        </div>
        <hr style="margin: 2em 0" v-if="pinnedNotes.length > 0 && unpinnedNotes.length > 0">
        <div class="grid-for-notes">
          <NoteInGrid v-for="note in unpinnedNotes" :note="note"></NoteInGrid>
        </div>
      </div>
      <div v-else>
        Создайте свою первую заметку нажав на карандаш в верхнем меню
      </div>
    </div>
    <div v-else>
      Войдите чтобы видеть свои заметки
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
    grid-gap: 1.8em;
  }
}
@media (max-width: 750px) {
  .grid-for-notes{
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
