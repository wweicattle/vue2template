<template>
  <div class="table-header-contain">
    <div class="change-nav">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="operate-contain">
      <ul class="list-content">
        <template v-for="(val, index) in operateData">
          <li @click="$emit('operate', val.describe)" :key="index">
            <i class="iconfont" :class="val.icon" />{{ val.name }}
          </li>
        </template>
      </ul>
      <el-button type="primary" size="mini"> 生成付款计划 </el-button>
    </div>
  </div>
</template>

<script>
import operateData from "@/utils/tableOperate";
export default {
  data() {
    return {
      operateData,
      activeName: "first",
    };
  },
  created() {
    console.log(333);
  },
  mounted() {
    console.log(222);
  },
  methods: {
    oparateBtn(instruct) {
      this.$emit("operate", instruct);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped lang="scss">
.table-header-contain {
  .operate-contain {
    padding: 10px 0 ;
    justify-content: space-between;
    display: flex;
    .list-content {
      display: flex;
      li {
        width: 80px;
        height: 26px;
        border: 1px solid #ccc;
        line-height: 26px;
        text-align: center;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        background: #ebebeb;
        color: #333333;
        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
        i {
          font-size: 14px;
        }
        &:first-child {
          border-radius: 6px 0 0 6px;
        }
        &:last-child {
          border-radius: 0 6px 6px 0;
        }
      }
    }
  }
  .change-nav {
    /deep/ .el-tabs {
      .el-tabs__header {
        width: 100%;
        background: none;
        border-bottom: 1px solid #ccc;
        .el-tabs__nav {
          .is-active {
            border: none;
            background: #eceef1;
          }

          .el-tabs__item {
            // border-radius: 10px;
            border: 1px solid #ccc;
            border-bottom: none;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #3f4852;
          }
        }
      }
    }
  }
}
</style>
