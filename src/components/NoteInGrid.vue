<template>
  <div class="note">
    <div class="header-of-note for-row">
      <div class="flex1">
        <h1 class="note-title" :title="note.header">{{ truncatedHeader }}</h1>
      </div>
      <div class="flex2">
        <button class="pinned-pin" @click="unpinNote" v-if="note.isPinned"></button>
        <button class="pin" @click="pinNote" v-else></button>
      </div>
    </div>
    <div class="time-of-note">
      <p class="time-line">  </p>
    </div>
    <div class="note-content">
      <p class="content-of-note" v-html="note.body.replace(/\n/g, '<br>')">
      </p>
    </div>
    <div class="note-bottom">
      <div class="labels-holder">
        <div class="label">
          <p class="label-name">Loreum ipsum</p>
          <button class="label-button"></button>
        </div>
      </div>
      <button class="note-delete"></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NoteInGrid",
  props: {
    note: Object
  },
  computed: {
    truncatedHeader() {
      const maxCharacters = 19; // Максимальное количество символов
      if (this.note.header.length > maxCharacters) {
        return this.note.header.substring(0, maxCharacters) + '...';
      }
      return this.note.header;
    }
  },
  methods: {
    pinNote() {
      axios.put('/notes/'+this.note.id+'/pin', this.note.id,{headers: {"Authorization": `Bearer ${localStorage.token}`}})
          .then(response => {
            // Handle the response from the server
            console.log(response.data);
            window.location.reload();
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
    },
    unpinNote(){
      axios.put('/notes/'+this.note.id+'/unpin', this.note.id,{headers: {"Authorization": `Bearer ${localStorage.token}`}})
          .then(response => {
            // Handle the response from the server
            console.log(response.data);
            window.location.reload();
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
    }
  }
}
</script>

<style scoped>
.note{
  background-color: #D9D9D9;
  height: 27em;
}

.note-title {
  font-size: 1.6em;
  line-height: 1;
}

.header-of-note {
  padding: 0.8em;
}
.pin{
  background-image: url("../assets/office-push-pin.png");
  background-size: 100%;
  opacity: .0;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 1.6em;
  height: 1.6em;
  transition: .3s;
}
.note:hover .pin{
  opacity: .5;
}
.pinned-pin{
  background-image: url("../assets/pin.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 1.6em;
  height: 1.6em;
  opacity: .8;
}
.flex1{
  text-align: left;
  width: 80%;
}
.flex2{
  text-align: right;
  width: 20%;
}
.time-of-note{
  background-color: #C6C6C6;
  padding: 0.3em 0.8em;
}
.time-line{
  font-size: 1em;
  line-height: 1;
}

.note-content {
  padding: 0.8em;
  height: 15em;
}
.content-of-note{
  font-size: 0.9em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 15;
  overflow: hidden;
}

.note-bottom {
  margin: 0 0.8em 0.8em;
  width: auto;
  float: right;
}
.labels-holder{
  display: flex;
}
.label{
  padding: 0.4em;
  border-radius: 1em;
  background-color: #C6C6C6;
  display: flex;
}
.label-name{
  margin-right: 0.8em;
}
.label-button{
  background-image: url("../assets/cross-small.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 1.2em;
  height: 1.2em;
}
.note-delete{
  display: flex;
  background-image: url("../assets/free-icon-font-trash-can-check.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 1.8em;
  height: 1.8em;
  opacity: .8;
  margin-right: 0;
  margin-top: 0.8em;
}
</style>