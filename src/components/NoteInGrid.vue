<template>
  <div class="note">
    <div class="header-of-note for-row">
      <div class="flex1">
        <h1 class="note-title">Title</h1>
      </div>
      <div class="flex2">
        <button class="pinned-pin" v-if="pinned"></button>
        <button class="pin" v-else></button>
      </div>
    </div>
    <div class="time-of-note">
      <p class="time-line">DateTime</p>
    </div>
    <div class="note-content">
      <p class="content-of-note">
         Urna nunc id cursus metus aliquam eleifend mi in nulla. Congue quisque egestas diam in. Leo urna molestie at elementum eu facilisis sed. Vulputate eu scelerisque felis imperdiet proin. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Sed sed risus pretium quam vulputate dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et. Urna nunc id cursus metus aliquam eleifend mi in nulla. Congue quisque egestas diam in. Leo urna molestie at elementum eu facilisis sed. Vulputate eu scelerisque felis imperdiet proin. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Sed sed risus pretium quam vulputate dignissim.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteInGrid"
}
</script>

<style scoped>
.note{
  background-color: #D9D9D9;
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
  height: 16em;
}
.content-of-note{
  font-size: 0.8em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 15;
  overflow: hidden;
}
</style>