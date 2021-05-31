<template>
  <!-- 开始 保证金的设计 -->
  <div class="margin-contain">
    <div class="table-contain">
      <div class="invoice">
        <div class="type">
          <span>*发票类型</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="type"><span>*发票税率</span><el-input></el-input></div>
      </div>

      <!-- 操作向上详向下移动 -->
      <table-header-operate @operate="operatelistBtn" />

      <!-- 表格数据 -->
      <div class="tables">
        <el-table
          :data="tableData"
          border
          highlight-current-row
          style="width: 100%"
          :header-cell-style="{
            background: '#eef1f6',
            color: '#606266',
            padding: '5px 0',
            lineHeight: '0',
          }"
          :cell-style="{ padding: '5px 0' }"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="date" label="租金开始时间" width="160">
            <template slot-scope="scope">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="租金结束时间" width="160">
            <template slot-scope="scope">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="租金计算基准 ">
            <template slot-scope="scope">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="是否免租期">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-table-column>
          <el-table-column prop="address" label="租金（含税） ">
            <el-input></el-input>
          </el-table-column>
          <el-table-column prop="address" label="付款频率 " width="280">
            <div class="pay-time">
              每<el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              >个月<el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              >号付一次
              <i class="iconfont icon-icon_user_newtab"></i>
            </div>
          </el-table-column>
          <el-table-column prop="address" label="付款报到">
            <div class="before-pay">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-input></el-input>
              付
            </div>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import TableHeaderOperate from "./tableDetailCommon/tableHeaderOperate.vue";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      value: "",
      options: [32, 323],
    };
  },
  created() {},
  mounted() {},
  methods: {
    operatelistBtn(instruct) {
      console.log(instruct);
    },
  },
  components: {
    TableHeaderOperate,
  },
};
</script>

<style scoped lang="scss">
.margin-contain {
  padding: 0 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  .invoice {
    display: flex;
    padding: 15px 0;
    align-items: center;
    .el-select {
      width: 220px;
    }
    .type {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
    span {
      padding-right: 10px;
    }
    .el-input{
      width: 200px;
    }
  }
  
  .table-contain {
    .el-table {
      margin: 20px 0;
      .pay-time {
        display: flex;
        align-items: center;
        .el-select {
          width: 70px;
        }
      }
      .before-pay {
        display: flex;
        align-items: center;
      }
      /deep/ .el-select {
        // height: 20px;
        height: 28px !important;
        .el-input {
          height: 28px !important;
          color: red;
        }
      }
    }
  }
}
</style>
