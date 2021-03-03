<template>
  <div id="app">
    <keep-alive include="Index">
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>
<script>
// import Poster from "components/Poster";
// import Postera from "components/Postera";
// import { eventBus } from "utils/eventbus";

export default {
  name: "App",
  data: function () {
    return {};
  },
  mounted() {},
  components: {
    // Poster,
    // Postera,
  },
  methods: {},
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
