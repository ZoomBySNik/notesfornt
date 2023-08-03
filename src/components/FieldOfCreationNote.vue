<template>
  <div @click="clickOnClose" class="gray-background">
  </div>
  <div class="box-for-register">
    <button class="close-button" @click="clickOnClose">x</button>
    <div class="input-line"><p>Заголовок</p><input type="text" class="text-input" v-model="header" placeholder="Заголовок">
    </div>
    <div class="input-field"><textarea class="text-input" v-model="body" placeholder="Содержимое"></textarea></div>
    <div>
      <button class="button-submit" @click="saveNote">Сохранить</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FieldOfCreationNote",
  data() {
    return {
      header: "",
      body: "",
    };
  },
  methods: {
    clickOnClose() {
      this.header = "";
      this.content = "";
      this.$emit('button-on-close-clicked');
    },
    saveNote() {
      const noteData = {
        header: this.header,
        body: this.body,
      };

      axios.post('/notes', noteData, { headers: {"Authorization" : `Bearer ${localStorage.token}`} })
          .then(response => {
            // Handle the response from the server
            console.log(response.data);
            window.location.reload();
            this.clickOnClose();
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
.box-for-register {
  width: 60em;
  height: 45em;
  padding: 2em;
  background-color: #C6C6C6;
  position: fixed;
  margin: auto;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 1.6em;
  box-shadow: 0 0 0.8em rgba(0, 0, 0, 0.6);
}
</style>