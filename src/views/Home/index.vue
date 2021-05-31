<template>
  <div id="home">
    <div class="home-header">
      <Header />
    </div>
    <section class="home-contains">
      <div class="left left-contain">
        <left-menu></left-menu>
      </div>
      <div class="right right-contain">
        <right-contain> <router-view></router-view></right-contain>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./child/Headers";
import LeftMenu from "./child/LeftMenu";
import RightContain from "./child/RightContain";
export default {
  name: "Home",
  components: {
    Header,
    LeftMenu,
    RightContain,
  },
};
</script>

<style lang="scss">
@import url("~assets/css/base.css");
#home {
  height: 100%;
  .home-header {
  }
  .home-contains {
    overflow: hidden;
    height: calc(100% - 48px);
    .left-contain {
      width: 140px;
      height: 100%;
      background: #2b303b;
      ul {
        border: none;
      }
    }
    .right-contain {
      width: calc(100% - 140px);
      background: #eef2f6;
      height: 100%;
    }
  }
}
</style>
