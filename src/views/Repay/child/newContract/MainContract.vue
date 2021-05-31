<template>
  <!-- 合同主体信息头部 -->
  <card-contain titleName="合同主体信息">
    <!-- 动态组件 -->
    <!-- 开始编辑内容数据 -->
    <div class="main-contract">
      <!-- 添加 的字段信息 -->
      <div class="attrs">
        <div class="att-item">
          <span class="mustWrite">*</span>
          <span class="tit">合同编号</span>
          <div>
            <el-input placeholder="请输入内容"> </el-input>
          </div>
        </div>
        <div class="att-item con-sort">
          <span class="mustWrite">*</span>
          <span class="tit">合同分类</span>

          <div>
            <el-select v-model="value" placeholder="选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="att-item party-a">
          <span class="mustWrite">*</span>
          <span class="tit">甲方/出租方</span>

          <div>
            <el-input placeholder="请输入内容"> </el-input>
          </div>
        </div>

        <div class="att-item party-b">
          <span class="mustWrite">*</span>
          <span class="tit">甲方/出租方</span>

          <div>
            <el-input placeholder="请输入内容"> </el-input>
          </div>
        </div>
        <div class="att-item pay-area">
          <span class="mustWrite">*</span>
          <span class="tit">承租面积</span>

          <div>
            <el-input placeholder="请输入内容"> </el-input>
          </div>
        </div>
        <div class="att-item pay-maker">
          <span class="mustWrite">*</span>

          <span class="tit"> 制单人</span>

          <div>
            <el-input placeholder="请输入内容"> </el-input>
          </div>
        </div>
      </div>
      <div class="attrs">
        <div class="att-item">
          <span class="mustWrite">*</span>
          <span class="tit"> 是否转租</span>
          <div>
            <el-radio-group v-model="radio">
              <el-radio :label="3">是</el-radio>
              <el-radio :label="9">否</el-radio>
            </el-radio-group>
            <!-- <el-input placeholder="请输入内容" > </el-input> -->
          </div>
        </div>
        <div class="att-item pay-address">
          <span class="mustWrite">*</span>

          <span class="tit"> 租赁地址</span>

          <div class="detail-address">
            <div class="pro">
              <el-select v-model="value" placeholder="选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <span> 省</span>
            </div>
            <div class="city">
              <el-select v-model="value" placeholder="选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <span>市</span>
            </div>
            <div class="country">
              <el-select v-model="value" placeholder="选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <span class="coun-tit">县/区</span>
            </div>
            <el-input placeholder="请输入内容"> </el-input>
          </div>
        </div>
        <div class="att-item party-b">
          <span class="mustWrite">*</span>

          <span class="tit"> 经办人(可多填)</span>

          <div>
            <el-input placeholder="请输入内容"> </el-input>
          </div>
        </div>
        <div class="att-item date-range">
          <span class="mustWrite">*</span>
          <span class="tit"> 租赁期限</span>
          <span class="time">(总计12个月)</span>
          <div>
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="add-repay">
        <div class="rep-icon">
          <span>+</span>
          <span class="rep-per">添加转租方</span>
        </div>
        <div class="add-item-content">
          <ul>
            <template v-for="(val, index) in 5">
              <li :key="index">
                <div class="icon">
                  <span class="icon-css">1</span>
                  <span class="icon-tit">一手转租</span>
                </div>
                <el-input placeholder="福建销售公司"> </el-input>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="upload-content">
        <div class="att-item">
          <span> 特例条款</span>
          <div>
            <textarea placeholder="请输入"> </textarea>
          </div>
        </div>
        <div class="upload-img">
          <span class="tit">
            附件上传
            <el-dropdown trigger="click">
              <el-button type="primary" size="mini" icon="el-icon-arrow-down"
                >上传</el-button
              >
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  ><i class="iconfont icon-icon_contract"></i
                  >合同原文</el-dropdown-item
                >
                <el-dropdown-item
                  ><i class="iconfont icon-icon_proof"></i
                  >产权证信息</el-dropdown-item
                >
                <el-dropdown-item
                  ><i class="iconfont icon-icon_idcard"></i
                  >身份证</el-dropdown-item
                >
                <el-dropdown-item
                  ><i class="iconfont icon-icon_sublet"></i
                  >转租材料</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <div class="table-content">
            <el-table
              :data="tableData"
              border
              highlight-current-row
              height="124px"
              style="width: 100%"
              :header-cell-style="{
                background: '#eef1f6',
                color: '#606266',
                padding: '5px 0',
                lineHeight: '0',
              }"
              :cell-style="{ padding: '5px 0' }"
            >
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </div>
          <!-- <el-table :data="tableData" height="124" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table> -->
        </div>
      </div>
    </div>
  </card-contain>
</template>

<script>
import CardContain from "@/components/common/CardContain";
export default {
  data() {
    return {
      textarea2: "sssssssssssssssssssssssssssss",
      radio: 3,
      options: [
        {
          value: "选项1",
          label: "黄金",
        },
        {
          value: "选项2",
          label: "双皮",
        },
        {
          value: "选项3",
          label: "蚵仔",
        },
        {
          value: "选项4",
          label: "龙须",
        },
        {
          value: "选项5",
          label: "北鸭",
        },
      ],
      value: "",
      value1: "",
      value2: "",
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
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
        // {
        //   date: "2016-05-08",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
        // {
        //   date: "2016-05-06",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
        // {
        //   date: "2016-05-07",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    CardContain,
  },
};
</script>

<style scoped lang="scss">
$inputWidth: 160px;
$fontTextColor: #488ce3;
.mustWrite {
  color: red;
}
.main-contract {
  line-height: 40px;
  padding: 0 15px;
  .attrs {
    display: flex;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    justify-content: space-around;
    .att-item {
      // margin-right: 20px;
      width: $inputWidth;
      // text-align:left
      &.con-sort {
        width: $inputWidth + 60;
        .el-select {
          padding-right: 5px;
          width: 50%;
        }
      }
      &.pay-area,
      &.pay-maker {
        width: $inputWidth - 80;
        .el-input {
          width: 100%;
        }
      }
      &.party-a,
      &.party-b {
        width: $inputWidth + 80;
      }
      &.pay-address {
        width: $inputWidth + 340;
        .detail-address {
          display: flex;
          justify-content: space-around;
          .pro,
          .city,
          .country {
            display: flex;
            padding-right: 10px;
            span {
              padding-left: 4px;
              font-size: 12px;
              display: inline-block;
              color: #333;
              &.coun-tit {
                width: 35px;
              }
            }
          }
          .country {
            // width: 100px;
          }
          .el-select {
            width: 80px;
          }
        }
      }
      &.date-range {
        width: $inputWidth + 40;
        .el-date-editor {
          width: 100%;
        }
        .time {
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #488ce3;
        }
      }
      .tit {
        padding-left: 2px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
      }
    }
  }
  .add-repay {
    padding: 0 10px;
    margin-top: 15px;
    height: 131px;
    background: #ffffff;
    box-shadow: 0px 3px 8px 0px rgba(200, 202, 207, 0.5);
    border-radius: 4px 0px 0px 0px;
    border: 1px solid #dfe0e2;
    font-size: 14px;
    .rep-icon {
      color: $fontTextColor;
      .rep-per {
        color: $fontTextColor;
      }
    }
    ul {
      display: flex;
      overflow: auto;
      li {
        padding-right: 20px;
        .icon {
          .icon-css {
            display: inline-block;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: $fontTextColor;
            line-height: 18px;
            text-align: center;
            color: #fff;
          }
          .icon-tit {
            font-weight: 600;
            padding-left: 8px;
          }
        }
      }
    }
  }

  .upload-content {
    display: flex;
    height: 220px;
    padding-top: 20px;
    overflow: hidden;
    justify-content: space-between;
    .att-item {
      div {
        width: 501px;
        height: 124px;
        border-radius: 4px;
        outline: none;
        border: 1px solid #d0d1d4;
        textarea {
          width: 100%;
          outline: none;
          border: none;
          height: 100%;
        }
      }
    }
    .upload-img {
      width: calc(100% - 531px);
      .tit {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-button {
          padding: 0;
          height: 28px;
          width: 65px;
        }
      }
      .table-content {
        height: 124px;
      }
    }
  }
}
</style>
