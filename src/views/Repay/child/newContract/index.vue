<template>
  <div class="contract-contain">
    <el-card class="box-card">
      <div class="now-tit left">合同详情</div>
      <div class="funcition-total right">
        <div><i class="iconfont icon-icon_save"></i> 保存</div>
        <div><i class="iconfont icon-icon_refresh"></i> 刷新</div>
        <div><i class="iconfont icon-icon_moreoprate"></i> 操作</div>
      </div>
    </el-card>

    <div class="detail-content">
      <!-- 合同主体信息 -->
      <main-contract />

      <!-- 租金主体信息 -->
      <money-sort />

      <!-- 承担部门 -->
      <depart-ment />
    </div>
  </div>
</template>

<script>
import Table from "@/components/common/Table";
import MainContract from "./MainContract";
import MoneySort from "./MoneySort";
import DepartMent from "./DepartMent";

export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      inputs: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  components: {
    Table,
    MainContract,
    MoneySort,
    DepartMent
  },
};
</script>
    CardContain

<style scoped lang="scss">
.contract-contain {
  height: 100%;
  .box-card {
    line-height: 40px;
    font-size: 14px;
    padding: 0 15px 0 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    .now-tit {
      color: #606266;
    }
    .funcition-total {
      color: #0c4c7f;
      width: 220px;
      display: flex;
      justify-content: space-around;
    }
  }

  .detail-content {
    height: calc(100% - 40px);
    overflow: auto;
    // border:1px solid  red;
  }
}
</style>
