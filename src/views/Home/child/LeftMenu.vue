<template>
  <div class="lefts-contain">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px"> -->
    <!-- <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button> -->
    <!-- </el-radio-group> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="#fff"
      background-color="#2B303B"
    >
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style  scoped lang="scss">
.lefts-contain {
   .el-menu {
     .el-menu-item {
      color: #fff;
    }
    .is-active {
      color: #fff;
      background-color: #488ce3 !important;
    }
  }
}
/deep/ .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
}
</style>
