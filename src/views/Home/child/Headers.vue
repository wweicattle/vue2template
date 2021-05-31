<template>
  <div class="header">
    <div class="hed-left">
      <div class="company-name">LILANZ</div>
      <div class="ope-menu">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="item-name">Saas财务系统</div>
    </div>
    <div class="hed-right">
      <div class="tasks">
        <span><i class="iconfont icon-icon_nav_task"></i></span>
        <span class="task-name">任务</span>
      </div>
      <div class="per-detail">
        <span>
          <i class="el-icon-user"></i>
        </span>
        <span class="per-name">Amdin</span>
        <span>
          <i class="el-icon-arrow-down"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 48px;
  background: #2b303b;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  color: #fff;

  .hed-left {
    width: 300px;
    display: flex;
    align-items: center;
    .company-name {
      width: 140px;
      height: 48px;
      background: #040b22;
      font-size: 16px;
      line-height: 48px;
      font-weight: 900;
      text-align: center;
    }
    .ope-menu {
      width: 40px;
      background: #040b22;
      height: 48px;
      line-height: 48px;
      padding: 0 3px;
      font-size: 20px;
    }
    .item-name {
      padding-left: 20px;
      font-size: 16px;
    }
  }
  .hed-right {
    display: flex;
    width: 200px;
    align-items: center;
    font-size: 18px;
    justify-content: space-around;
    .task-name {
      padding-left: 3px;
      font-size: 14px;
    }
    .per-detail {
      font-size: 14px;
      .per-name {
        padding: 0 2px;
      }
    }
  }
}
</style>