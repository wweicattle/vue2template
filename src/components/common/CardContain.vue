<template>
  <div class="card-contain">
    <el-card>
      <div class="con-header">
        <div class="tit">
          <span class="l"></span>
          <span class="l-name">{{titleName}}</span>
        </div>
        <i class="iconfont icon-icon_arrow_rough"></i>
      </div>
      <div class="daynatic">
        <slot />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    titleName:{
      type:String,
    }
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.card-contain {
  margin: 20px;
  //   height: 400px;
//   border: 1px solid red;
  box-shadow: 0px 4px 4px 0px rgba(225, 225, 225, 0.5);
  /deep/ .el-card {
    height: 100% !important;
    .el-card__body {
      padding: 0;
    }
  }
  .con-header {
    padding: 8px 15px;
    height: 44px;
    border-bottom: 1px dotted #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tit {
      display: flex;
      align-items: center;
      .l {
        width: 5px;
        height: 16px;
        margin-right: 4px;
        background: #488ce3;
      }
      .l-name {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #333333;
      }
    }
  }
}
</style>
