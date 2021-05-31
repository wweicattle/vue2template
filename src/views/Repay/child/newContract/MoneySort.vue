<template>
  <!-- 合同主体信息头部 -->
  <card-contain titleName="标的信息">
    <div class="pays-contain">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        editable
        @edit="handleTabsEdit"
      >
        <el-tab-pane
          :key="item.name"
          v-for="item in editableTabs"
          :label="item.title"
          :name="item.name"
        >
          <span slot="label"
            ><i class="iconfont icon-icon_user_newtab"></i
            ><span class="nav-name"> 我的行程</span
            ><span class="contain">1</span>
            <span class="contain">e</span>
            <span class="contain">1</span>
          </span>
          <div class="tab-nav-content">
            <!-- 设置区域，分为左边left点击，右边内容 -->
            <!-- 标的信息区域 -->
            <el-container>
              <!-- 左边点击选择那款租金 -->
              <el-aside width="50px">
                <ul class="left-items">
                  <template v-for="(val, index) in 5">
                    <li class="i-detail" :key="index" @click="addTabs">
                      <svg height="134" width="44">
                        <polygon
                          points="0,0 44,8 44,128 0,134"
                          style="fill: white; stroke: #cacaca; stroke-width: 1"
                        />
                      </svg>
                      <div class="text-content">
                        <i class="icon">+</i>
                        <div class="i-name">保证二位无 金</div>
                      </div>
                    </li>
                  </template>
                </ul>
              </el-aside>
              <!-- 保障金 pos 卡片 -->
              <el-main>
                <!-- 付款人 信  -->
                <div class="pay-per-detail">
                  <pay-contain titleName="最新收款人信息" backColor="#F4F9FF">
                    <!--左边图标动态 -->
                    <template #icon>
                      <span class="l" :style="{ background: '#488ce3' }">
                        <i class="iconfont icon-icon_user_full"></i
                      ></span>
                    </template>

                    <!-- 右边是否有删除图标 -->
                    <template #icon-delete>
                      <span class="delete-css">
                        <el-button type="primary" size="mini"
                          >变更两次</el-button
                        >
                      </span>
                    </template>

                    <!-- content -->
                    <div class="new-per-detail">
                      <el-form
                        :model="ruleForm"
                        :rules="rules"
                        ref="ruleForm"
                        label-width="100px"
                        class="demo-ruleForm"
                      >
                        <el-form-item label="账户名称" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="银行账号" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="收款类型" prop="region">
                          <el-select
                            v-model="ruleForm.region"
                            placeholder="请选择活动区域"
                          >
                            <el-option
                              label="区域一"
                              value="shanghai"
                            ></el-option>
                            <el-option
                              label="区域二"
                              value="beijing"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="开户银行" prop="region">
                          <el-select
                            v-model="ruleForm.region"
                            placeholder="请选择活动区域"
                          >
                            <el-option
                              label="区域一"
                              value="shanghai"
                            ></el-option>
                            <el-option
                              label="区域二"
                              value="beijing"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="银行卡号" prop="region">
                          2021199970913
                        </el-form-item>
                      </el-form>
                    </div>
                  </pay-contain>
                </div>

                <!-- 保证金卡片 -->
                <pay-contain titleName="保证金">
                  <!--左边图标动态 -->
                  <template #icon>
                    <span class="l" :style="{ background: '#488ce3' }">
                      <i class="iconfont icon-icon_user_full"></i
                    ></span>
                  </template>
                  
                  


                  <!-- 右边是否有删除图标 -->
                  <template #icon-delete>
                    <span class="delete-css">
                      <i class="iconfont icon-icon_delete"></i>
                      删除
                    </span>
                  </template>

                  <!-- content区域 -->
                  <div>
                    <!-- <component v-bind:is="MarginCom"></component> -->
                    <margin-com />
                  </div>
                </pay-contain>


                  <!-- 保证金卡片 -->
                <pay-contain titleName="保证金">
                  <!--左边图标动态 -->
                  <template #icon>
                    <span class="l" :style="{ background: '#488ce3' }">
                      <i class="iconfont icon-icon_user_full"></i
                    ></span>
                  </template>

                  <!-- 右边是否有删除图标 -->
                  <template #icon-delete>
                    <span class="delete-css">
                      <i class="iconfont icon-icon_delete"></i>
                      删除
                    </span>
                  </template>

                  <!-- content区域 -->
                  <div>
                    <!-- <component v-bind:is="MarginCom"></component> -->
                    <margin-com />
                  </div>
                </pay-contain>


                  <!-- 保证金卡片 -->
                <pay-contain titleName="保证金">
                  <!--左边图标动态 -->
                  <template #icon>
                    <span class="l" :style="{ background: '#488ce3' }">
                      <i class="iconfont icon-icon_user_full"></i
                    ></span>
                  </template>

                  <!-- 右边是否有删除图标 -->
                  <template #icon-delete>
                    <span class="delete-css">
                      <i class="iconfont icon-icon_delete"></i>
                      删除
                    </span>
                  </template>

                  <!-- content区域 -->
                  <div>
                    <!-- <component v-bind:is="MarginCom"></component> -->
                    <margin-com />
                  </div>
                </pay-contain>

                <template v-for="(val, index) in slectTabsData">
                  <transition name="fade" :key="index">
                    <component
                      v-bind:is="(PayContain = val.name)"
                      :titleName="val.describe"
                    >
                      <!--左边图标动态 -->
                      <template #icon>
                        <span class="l" :style="{ background: '#488ce3' }">
                          <i class="iconfont icon-icon_user_full"></i
                        ></span>
                      </template>

                      <!-- 右边是否有删除图标 -->
                      <template #icon-delete>
                        <span class="delete-css">
                          <i class="iconfont icon-icon_delete"></i>
                          删除
                        </span>
                      </template>

                      <!-- content区域 -->
                      <div>
                        <!-- <component v-bind:is="MarginCom"></component> -->
                        <margin-com />
                      </div>
                    </component>
                  </transition>
                </template>
              </el-main>
            </el-container>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </card-contain>
</template>

<script>
import CardContain from "@/components/common/CardContain";
import PayContain from "@/components/common/PayContain";
import MarginCom from "@/components/MarginCom.vue";

export default {
  data() {
    return {
      show: false,
      editableTabsValue: "2",
      slectTabsData: [],
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tabfrerr",
          name: newTabName,
          content: "New Tab content",
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      }
    },
    addTabs() {
      this.slectTabsData.push({
        name: "PayContain",
        describe: "保证金",
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  components: {
    CardContain,
    PayContain,
    MarginCom,
  },
};
</script>

<style scoped lang="scss">
.pays-contain {
  background: #eceef1;
  /deep/ .el-tabs {
    width: 100%;
    .el-tabs__header {
      background: #eceef1;
      display: inline-block;
      border: none;
      margin: 0;
      max-width: 100%;
      height: 100%;
      // display: flex;
      // align-items: center;
      position: relative;
      .is-active {
        height: 100%;
        border-top: 2px solid #488ce3;
        background: #ffffff;
        border-bottom: none;
        color: #000;
      }
      .el-tabs__new-tab {
        width: 26px;
        height: 26px;
        background: #d8d9dc;
        border-radius: 50%;
        color: #000;
        font-size: 20px;
        line-height: 26px;
        &:hover {
          opacity: 0.8;
        }
        // margin-top: 6.5px;
      }

      .el-tabs__nav-wrap {
        .el-tabs__nav {
          border: none;
          height: 100%;
          .nav-name {
            font-size: 12px;
            font-weight: 550;
            padding: 0 3px;
          }
        }
      }
    }

    .pay-per-detail {
      .new-per-detail {
        padding: 20px 0 0 0;
        .el-form {
          width: 400px;
          .el-form-item {
            // margin-bottom: 10px;
          }
        }
      }
    }
  }
  .tab-nav-item {
    background: #fff;
  }
  .contain {
    min-width: 14px;
    height: 14px;
    line-height: 14px;
    display: inline-block;
    border-radius: 50%;
    background: #ff972e;
    margin-right: 1px;
    color: #fff;
    text-align: center;
  }

  .tab-nav-content {
    background: #fff;
    .left-items {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .i-detail {
        width: 44px;
        height: 134px;
        position: relative;
        &:hover {
          opacity: 0.8;
          font-size: 15px;
          zoom: 1.05;
          cursor: pointer;
        }
        .text-content {
          overflow: hidden;
          width: 22px;
          position: absolute;
          z-index: 100;
          height: 104px;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          text-align: center;
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
          .icon {
            display: inline-block;
            height: 22px;
            width: 22px;
            background: #d8d9dc;
            border-radius: 50%;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            color: #606266;
            margin-bottom: 5px;
          }
          .i-name {
            font-size: 13px;
            font-family: PingFangSC-Regular, PingFang SC;
            color: #333333;
            line-height: 1.2;
          }
        }
      }
    }

    .el-container {
      .l {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        line-height: 28px;
        text-align: center;
        line-height: 24px;
        color: #fff;
        margin-right: 6px;
        i {
          font-size: 13px;
        }
      }
      .delete-css {
        color: #0c4c7f;
        font-size: 12px;
        padding-right: 12px;
      }
    }
  }
}
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 3.5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
