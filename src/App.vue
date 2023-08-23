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
    notesByPinned() {
      let a = this.notes.filter(note => note.isPinned);
      let b = this.notes.filter(note => !note.isPinned);
      return a.concat(b);
    },
    loggedUser() {
      return localStorage.getItem('token') !== null;
    },
  },
  beforeMount() {
    if (this.loggedUser) {
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
      axios.get('/labels')
          .then(response => {
            this.labels = response.data;
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
        <v-row v-masonry>
          <v-col v-for="note in notesByPinned" cols="12" sm="3">
            <NoteInGrid :note="note" :labels="labels"></NoteInGrid>
          </v-col>
        </v-row>
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
</style>
