<template>
  <div class="note">
    <div class="header-of-note for-row">
      <div class="flex1 note-title-container">
        <h1 class="note-title" :title="note.header">{{ note.header }}</h1>
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
          <button class="label-create-button" @click="isAddLabelFieldOpen=!isAddLabelFieldOpen"></button>
        </div>
        <div class="label" v-for="label in note.labels">
          <p class="label-name">{{ label.labelTitle }}</p>
          <button class="label-button" @click="removeLabelFromNote(label.noteLabelId)"></button>
        </div>
        <div class="add-label-field" v-show="isAddLabelFieldOpen">
          <ul>
            <li v-for="label in availableLabels" :key="label.id">
              <button @click="addLabel(label.id)" class="add-label-button-available">{{ label.title }}</button>
            </li>
            <li class="for-row">
              <input type="text" placeholder="Добавить папку" class="text-input tag-add-input" v-model="title">
              <button class="add-label-button" @click="createAndAddLabel"></button>
            </li>
          </ul>
        </div>
      </div>
      <button class="note-delete" @click="isAcceptOpen=true"></button>
    </div>
  </div>
  <AcceptField v-if="isAcceptOpen"
      :text="'удалить заметку'" :title="note.header"
      @button-on-close-clicked="isAcceptOpen=!isAcceptOpen" @button-on-delete-clicked="deleteNote"
  ></AcceptField>
</template>

<script>
import axios from "axios";
import AcceptField from "@/components/AcceptField.vue";

export default {
  name: "NoteInGrid",
  components: {AcceptField},
  data() {
    return{
      isAcceptOpen: false,
      isAddLabelFieldOpen: false,
      title: "",
    };
  },
  props: {
    note: Object,
    labels: Object,
  },
  computed: {
    availableLabels() {
      if (this.note.labels) {
        const noteLabelIds = this.note.labels.map(label => label.noteLabelId);
        return this.labels.filter(label => !noteLabelIds.includes(label.id));
      } else {
        return this.labels;
      }
    }
  },
  methods: {
    pinNote() {
      axios.put('/notes/'+this.note.id+'/pin', this.note.id)
          .then(response => {
            console.log(response.data);
            window.location.reload();
          })
          .catch(error => {
            console.error(error);
          });
    },

    unpinNote(){
      axios.put('/notes/'+this.note.id+'/unpin', this.note.id)
          .then(response => {
            console.log(response.data);
            window.location.reload();
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
            console.error(error);
          });
    },

    addLabel(labelId){
      const data = {
        noteId: this.note.id,
        labelId: labelId
      }
      axios.post('/notes/'+this.note.id+'/labels/'+labelId, data)
          .then(response => {
            console.log(response.data);
            window.location.reload();
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
    },

    createAndAddLabel() {
      let labelId = null;
      const labelData = {
        title: this.title,
      };
      axios.post('/labels', labelData)
          .then(response => {
            console.log(response.data);
            labelId = response.data;
          })
          .catch(error => {

            console.error(error);
          });
      if (labelId !== null) {
        const data = {
          noteId: this.note.id,
          labelId: labelId,
        }
        axios.post('/notes/'+this.note.id+'/labels/'+labelId, data)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              }
            });
      }
    },

    removeLabelFromNote(labelId){
      const data = {
        noteId: this.note.id,
        labelId: labelId,
      }
      axios.delete( '/notes/'+this.note.id+'/labels/'+labelId, {data: data})
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

    deleteNote(){
      axios.delete( '/notes/'+this.note.id, {data: {noteId: this.note.id}})
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
  padding: 0.8em 0.8em 0;
  height: 16.5em;
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
  width: 94%;
  float: right;
}
.labels-holder{
  display: flex;
  height: 2em;
  flex-direction: row-reverse;
}
.label{
  padding: 0.4em;
  border-radius: 1em;
  background-color: #C6C6C6;
  display: flex;
  margin-right: 0.2em;
}
.label-name{
  margin-right: 0.2em;
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
  margin-left: auto;
}

.label-create-button {
  background-image: url("../assets/free-icon-font-plus-3917757.png");
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 1.2em;
  height: 1.2em;
}

.note-title-container {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Ограничение по количеству строк */
  -webkit-box-orient: vertical;
}

.add-label-field {
  margin-left: 1.9em;
  margin-top: 2.4em;
  width: 10%;
  position: fixed;
  list-style: none;
  border-radius: 1em;
  background-color: #D9D9D9;
  box-shadow: 0 0 0.8em rgba(0, 0, 0, 0.6);
  padding: 0.6em;
  color: #1E282E;
  z-index: 1000;
}

.add-label-button-available{
  border: none;
  background: none;
  width: 100%;
  text-align: left;
}
</style>