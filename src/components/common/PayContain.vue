<template>
  <div class="pay-contain" :style="{ background: backColor }">
    <!-- <el-card> -->
    <div
      class="con-header"
    >
      <div class="tit">
        <slot name="icon"></slot>
        <span class="l-name">{{ titleName }}</span>
      </div>

      <div class="right-icon">
        <slot name="icon-delete"></slot>
        <i class="iconfont icon-icon_arrow_rough"></i>
      </div>
    </div>
    <div class="daynatic">
      <slot />
    </div>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    titleName: {
      type: String,
    },
    backColor: {
      type: String,
      default: "#fff",
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.pay-contain {
  background: #f4f9ff;
  margin-bottom: 20px;
  border: 1px solid #d4d5d8;
  border-radius: 3px;
  box-shadow: 0px 4px 4px 0px rgba(225, 225, 225, 0.5);
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

      .l-name {
        font-size: 1px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #333333;
      }
    }
  }
}
</style>
