<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
@import url("~assets/css/base.css");
@import url("~assets/css/elementcommon.css");

body,html,#app{
  height: 100%;
}
</style>
