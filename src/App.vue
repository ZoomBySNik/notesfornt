<script>
import Navbar from "@/components/Navbar.vue";
import NoteInGrid from "@/components/NoteInGrid.vue";

export default {
  components: {NoteInGrid, Navbar},
  data() {
    return {
      notes: [
        {id: 1, title:'Title1', pinned:false, time:'11:30', content:'ergbi eorhfndgerijfdm ewogndkmelwgnoyh weingdmroewtjmrh ginemwoegnh regklfmeorigj regneworinh'},
        {id: 2, title:'Title2', pinned:false, time:'11:32', content:'fdhgjfdhmgfergbi eorhfndgerijfdm ewogndkmelwgnoyh weingdmroewtjmrh ginemwoegnh regklfmeorigj regneworinh'},
        {id: 3, title:'Title3', pinned:true, time:'11:40', content:'ergbi eorhfndgerijfdm etjgffretrjykhgdfrytujgfhwogndkmelwgnoyh weingdmroewtjmrh ginemwoegnh regklfmeorigj regneworinh'},
        {id: 4, title:'Title4', pinned:false, time:'11:42', content:'efdhjgkhgfdyuigkbhrgbi eorhfndgerijfdm ewogndkmelwgnoyh weingdmroewtjmrh ginemwoegnh regklfmeorigj regneworinh'},
      ],
      labels: [
        {id: 1, title:'Title1'},
        {id: 2, title:'Title2'}
      ]
    };
  },
  computed: {
    pinnedNotes() {
      return this.notes.filter(note => note.pinned).sort((a, b) => a.time.localeCompare(b.time));
    },
    unpinnedNotes() {
      return this.notes.filter(note => !note.pinned).sort((a, b) => a.time.localeCompare(b.time));
    },
    loggedUser() {
      if (localStorage.getItem('token') !== null){
        console.log('true');
        return true
      }
      else{
        console.log('false');
        return false
      }
    },
  },
};
</script>

<template>
  <Navbar :labels="labels" :isLogged="loggedUser"></Navbar>
  <div class="content">
    <div v-if="loggedUser">
      <div class="grid-for-notes">
        <NoteInGrid v-for="note in pinnedNotes" :note="note"></NoteInGrid>
      </div>
      <hr style="margin: 2em 0">
      <div class="grid-for-notes">
        <NoteInGrid v-for="note in unpinnedNotes" :note="note"></NoteInGrid>
      </div>
    </div>
    <div v-if="!loggedUser">
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
