<template>
  <div @click="clickOnClose" class="gray-background">
  </div>
  <div class="box-for-acception">
    <button class="close-button" @click="clickOnClose">x</button>
    <div class="line"><p>Вы уверены что хотите {{ this.text }} "{{ this.title }}"</p>
    </div>
    <div class="button-field">
      <button class="button-submit" @click="clickOnAccept">Да</button>
      <button class="button-submit" @click="clickOnClose">Нет</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "AcceptField",
  data() {
    return {

    };
  },
  props: {
    text: String,
    title: String
  },
  methods: {
    clickOnClose() {
      this.$emit('button-on-close-clicked');
    },
    clickOnAccept() {
      this.$emit('button-on-delete-clicked')
      this.$emit('button-on-close-clicked');
    }
  }
}
</script>

<style scoped>
.box-for-acception {
  width: 30em;
  height: 5em;
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

.button-field {
  margin-top: 0.9em;
}
</style>