<template>
  <div class="table-contain">
    <el-table
      border
      fit
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      stripe
      highlight-current-row
      @selection-change="handleSelectionChange"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
    >
      <el-table-column type="selection" width="55"> </el-table-column>

      <template v-for="(val, index) in tableLabel">
        <el-table-column
          :label="val.name"
          :prop="val.attr"
          :key="index"
          v-if="val.name == '审批状态'"
        >
          <template slot-scope="scope">
            <div class="approval-state">
              {{ scope.row[val.attr] }}
            </div>
          </template>
        </el-table-column>
        <el-table-column :label="val.name" :prop="val.attr" :key="index" v-else>
        </el-table-column>
      </template>
      <!-- <el-table-column label="操作" width="55">
        <template>...</template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableLabel: [
        { name: "合同编号", attr: "date" },
        { name: "合同分类", attr: "date1" },
        { name: "甲方/出租方", attr: "name1" },
        { name: "乙方/承租方", attr: "name" },
        { name: "是否转租", attr: "address1" },
        { name: "租赁地址", attr: "address" },
        { name: "审批状态", attr: "address2" },
      ],
      tableData: [
        {
          date: "",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          date1: "联营合同-快闪",
          name1: "利郎（福建）商务有限公司",
          address1: "是",
          address2: "审批通过",
        },
        {
          date: "2016-05-03111",
          name: "王小虎111",
          address: "上海市普陀区金沙江路 1518111 弄",
          date1: "2016-1105-03",
          name1: "王小11虎",
          address1: "上海市普陀区金沙11江路 1518 弄",
          address2: "上海市普陀区11金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          date1: "2016-05-03",
          name1: "王小虎",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          date1: "2016-05-03",
          name1: "王小虎",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          date1: "2016-05-03",
          name1: "王小虎",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style scoped lang="scss">
.table-contain{
  height: 100%;
  .el-table{
    font-size: 14px;
  }
  .approval-state{
    color: #0C866C;
  }
}
</style>
