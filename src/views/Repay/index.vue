<template>
  <div class="repay-contain">
    <el-card class="box-card">
      <div class="now-tit left">租赁合同</div>
      <div class="funcition-total right">
        <div><i class="iconfont icon-icon_newfile"></i> 新建合同</div>
        <div><i class="iconfont icon-icon_export"></i> 导出明细</div>
      </div>
    </el-card>
    <div class="repay-table">
      <div class="header">
        <div class="oper-btn">
          <el-button type="primary" size="small" icon="el-icon-arrow-down"
            >批量操作</el-button
          >
          <el-button type="primary" size="small" icon="el-icon-arrow-down" plain
            >自定义表头</el-button
          >
        </div>
        <div class="oper-find">
          <el-input
            placeholder="搜索合同编号，序号"
            v-model="inputs"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              size="small"
            ></el-button>
          </el-input>
          <el-button size="small" plain
            ><i class="iconfont icon-icon_filter" />高级搜索</el-button
          >
        </div>
      </div>

      <!-- 表格 -->
      <div class="table-data">
        <Table />
      </div>

      <div class="page-content">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "@/components/common/Table";
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
  },
};
</script>

<style scoped lang="scss">
.repay-contain {
  height: 100%;
  line-height: 40px;
  .box-card {
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

  .repay-table {
    margin: 10px;
    height: calc(100% - 60px);
    background: #ffffff;
    box-shadow: 0px 4px 4px 0px rgba(225, 225, 225, 0.5);
    padding: 10px 20px 10px 20px;
    .header {
      display: flex;
      justify-content: space-between;
      height: 60px;
      align-items: center;
      margin-bottom: 10px;
      .oper-btn {
      }
      .oper-find {
        display: flex;
        /deep/ .el-input {
          padding-right: 10px;
          .el-button {
            background: #409eff;
            color: #fff;
          }
          .el-input__inner {
            width: 368px;
            height: 32px;
          }
        }
      }
    }
    .table-data {
      overflow: auto;
      height: calc(100% - 120px);
    }

    .page-content {
      text-align: right;
    }
  }
}
</style>
