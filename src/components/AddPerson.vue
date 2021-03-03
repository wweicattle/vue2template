<template>
  <div class="add-per-contain">
    <div class="title-content">
      <span class="begin-tille">添加人员</span>
      <van-icon name="cross" @click="$router.go(-1)" />
    </div>
    <div class="swiper-mes">
      <van-notice-bar
        left-icon="volume-o"
        scrollable
        text="注意：请先选择人员，才会出现所选签卡班次！"
      />
    </div>
    <div>
      <van-search v-model="findValue" placeholder="请输入搜索关键词" />
    </div>
    <div class="sec-department">
      <div class="title">选择部门</div>
      <div class="f-date">
        <div class="f-dates">
          <span class="item-tit">部门<span class="star">*</span></span>
          <span class="item-d-range"
            >{{ departSelctName }}
            <van-icon name="arrow-down" @click="showDepartCom = true"
          /></span>
        </div>
      </div>
      <div class="f-date">
        <div class="f-dates">
          <span class="item-tit">二级部门<span class="star">*</span></span>
          <span class="item-d-range" @click="showTwoDeparDataState = true"
            >{{ departTwoSelctName }}<van-icon name="arrow-down"
          /></span>
        </div>
      </div>
      <div class="f-date" v-if="isshowMany">
        <div class="f-dates">
          <span class="item-tit">签卡班次<span class="star">*</span></span>
          <span class="item-d-range">
            <van-popover
              v-model="showOrderPopover"
              trigger="click"
              :actions="orderactions"
              @select="onSelects"
            >
              <template #reference>
                {{ orderTextSelect }}<van-icon name="arrow-down" />
              </template>
            </van-popover>

            <van-popover
              v-model="showPopover"
              trigger="click"
              :actions="actions"
              @select="onSelect"
            >
              <template #reference>
                {{ showclassname }}<van-icon name="arrow-down" />
              </template>
            </van-popover>
          </span>
        </div>
      </div>
      <div></div>
    </div>

    <!-- table-contain -->
    <div class="table-contain">
      <div class="title">
        选择人员
        <van-button icon="search" plain type="info" @click="findPerData">
          查询
        </van-button>
      </div>

      <div class="detail-table">
        <ul>
          <li class="li-list-one">
            <span class="check">
              <van-checkbox
                v-model="checked"
                shape="square"
                @click="checkAll"
              ></van-checkbox
            ></span>
            <span class="name">姓名</span><span class="sec">部门</span
            ><span class="work">岗位</span>
          </li>
        </ul>
        <ul class="detail">
          <van-checkbox-group v-model="result" ref="checkboxGroup">
            <template v-for="(i, index) in personData">
              <li :key="index">
                <span class="check">
                  <van-checkbox :name="index" shape="square"></van-checkbox
                ></span>
                <span class="name">{{ i.xm }}</span
                ><span class="sec">{{ i.bmmc }}</span
                ><span class="work">{{ i.gw }}</span>
              </li>
            </template>
          </van-checkbox-group>
          <div style="margin: 60px" v-if="personData.length == 0">无数据</div>
        </ul>
      </div>
    </div>
    <div class="white-content"></div>
    <div class="footer-contain">
      <van-button type="default" class="clear">清除</van-button>
      <van-button type="primary" class="confirm" @click="confirmclick"
        >确定({{result.length}})</van-button
      >
    </div>

    <!-- 部门 -->
    <van-action-sheet
      v-model="showDepartCom"
      :actions="departData"
      @select="onclikcDepartSelects"
    >
    </van-action-sheet>
    <!-- 二级部门 -->
    <van-action-sheet
      v-model="showTwoDeparDataState"
      :actions="departTwoData"
      @select="onclikcTwoDepartSelects"
    >
    </van-action-sheet>
  </div>
</template>

<script>
import { eventBus } from "utils/eventbus";

import {
  getDepartNameArr,
  getTwoDepartNameArr,
  getPersonData,
  getUserDatas,
  getOrderDatas,
} from "network/home";
export default {
  name: "addPerson",
  data() {
    return {
      showOrderPopover: false,
      showPopover: false,
      orderData: [],
      actions: [{ text: "上班" }, { text: "下班" }],
      orderactions: [],

      checked: false,
      findValue: "",
      departData: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      departSelctName: "",
      departTwoSelctName: "",
      showDepartCom: false,
      showTwoDeparDataState: false,
      departTwoData: [
        { name: "选项一" },
        { name: "选项二" },
        { name: "选项三" },
      ],
      personData: [],
      result: [],
      userData: [],
      showclassname: "上班",
      orderTextSelect: "请选择",
      isshowMany:false
    };
  },
  created() {
    this.$toast.loading({
      message: "加载中..",
      forbidClick: true,
      duration: 0,
    });
    this.getDepartNameArr();
  },
  mounted() {
    console.log(3333);
    console.log(window.localStorage.getItem("statePage"));
    if(window.localStorage.getItem("statePage")==1){
      this.isshowMany=false
    }else{
      this.isshowMany=true

    }
  },
  methods: {
    confirmclick() {
      console.log(this.result);
      let arr=[];
      this.result.forEach((val, index) => {
        arr.push(this.personData[val]);
      });
      window.localStorage.setItem("selectuser", JSON.stringify(arr));
      eventBus.$emit("ss",{sd:32})

      this.$router.push("/index");


    },
    onSelects(actions) {
      this.orderTextSelect = actions.text;
    },
    onSelect(actions) {
      this.showclassname = actions.text;
    },
    checkAll() {
      //  this.state=
      if (this.state) {
        this.result = [];
        // this.$refs.checkboxGroup.toggleAll();
        this.state = null;
      } else {
        this.$refs.checkboxGroup.toggleAll(true);
        this.state = 1;
      }
    },
    // 请求人员数据
    findPerData() {
      this.result = [];
      this.$toast.loading({
        message: "加载中..",
        forbidClick: true,
        duration: 0,
      });
      let bm = this.departData.find((val) => {
        return val.name == this.departSelctName;
      }).departNum;
      let ssbm = this.departTwoData.find((val) => {
        return val.name == this.departTwoSelctName;
      }).departNum;
      let obj = {
        bm: bm ? bm : "", //非必填
        ssbm: ssbm ? ssbm : "", //非必填
        rymc: this.findValue.trim(), //非必填
      };
      getPersonData(obj).then((da) => {
        if (da.data.errcode == 0) {
          this.$toast.clear();
          this.personData = da.data.data;
        } else {
          this.$notify({
            type: "warning",
            message: "请求用户数据失败，请重试！" + da.data.errmsg,
          });
        }
      });
    },
    // 二级部门数据请求
    getTwoDepartNameArr() {
      // 查找当前部门的标识
      let ssid = this.departData.find((val) => {
        return val.name == this.departSelctName;
      }).departNum;

      let obj = {
        ssid, //非必填 上级部门id
      };
      getTwoDepartNameArr(obj)
        .then((da) => {
          if (da.data.errcode == 0) {
            console.log(da);
            // console.log(da);
            // this.$toast.clear();
            if (da.data.data.length == 0) {
              this.departTwoSelctName = "";
              this.departTwoData = [{ name: "" }];
              return;
            }
            // // 默认显示第一个
            this.departTwoSelctName = da.data.data[0].mc;

            // // 处理接口传回来的数据！
            let adujustArr = da.data.data.reduce((sum, val, index, arrs) => {
              let obj = { name: val.mc, departNum: val.dm };
              sum.push(obj);
              return sum;
            }, []);
            this.departTwoData = adujustArr;

            // window.localStorage.setItem(
            //   "departNameArr",
            //   JSON.stringify(adujustArr)
            // );
          } else {
            this.$notify({
              type: "warning",
              message: "请求二级部门数据失败，请重试！" + da.data.errmsg,
            });
          }
        })
        .catch((da) => {
          this.$notify({
            type: "warning",
            message: "请求二级部门数据失败，请重试！" + da,
          });
        });
    },
    onclikcDepartSelects(actions) {
      this.departSelctName = actions.name;
      this.showDepartCom = false;
    },
    onclikcTwoDepartSelects(actions) {
      this.departTwoSelctName = actions.name;
      this.showTwoDeparDataState = false;
    },
    // 一级部门请求
    getDepartNameArr() {
      getDepartNameArr()
        .then((da) => {
          if (da.data.errcode == 0) {
            console.log(da);
            this.$toast.clear();
            // 默认显示第一个
            this.departSelctName = da.data.data[0].mc;

            // 处理接口传回来的数据！
            let adujustArr = da.data.data.reduce((sum, val, index, arrs) => {
              let obj = { name: val.mc, departNum: val.dm };
              sum.push(obj);
              return sum;
            }, []);
            this.departData = adujustArr;

            window.localStorage.setItem(
              "departNameArr",
              JSON.stringify(adujustArr)
            );
          } else {
            this.$notify({
              type: "warning",
              message: "请求部门数据失败，请重试！" + da.data.errmsg,
            });
          }
        })
        .catch((da) => {
          this.$notify({
            type: "warning",
            message: "请求部门数据失败，请重试！" + da,
          });
        });
    },
  },
  watch: {
  
    departSelctName() {
      this.getTwoDepartNameArr();
    },
    result(newVal) {
      if (newVal.length) {
        let token = "7815617dd98b20ae";
        getUserDatas(token).then((da) => {
          if (da.data.code == 200) {
            this.userData = da.data.data;
            window.localStorage.setItem(
              "userData",
              JSON.stringify(da.data.daata)
            );

            // 请求签卡班次
            getOrderDatas().then((da) => {
              if (da.data.code == 0) {
                this.orderData = da.data.data;
                let adujustData = this.orderData.reduce((sum, acc) => {
                  sum.push({ text: acc.mc, descibe: acc.dm });
                  return sum;
                }, []);
                console.log(this.orderData);
                this.orderactions = adujustData;

                window.localStorage.setItem("selectOrderData",JSON.stringify(this.orderactions))
              } else {
                this.$notify({
                  type: "warning",
                  message: "请求用户签卡失败，请重试！" + da.data.errmsg,
                });
              }
            });
          } else {
            this.$notify({
              type: "warning",
              message: "请求用户签卡失败，请重试！" + da.data.errmsg,
            });
          }
          console.log(da);
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.add-per-contain {
  height: 100%;
  //   padding: 0 16px;
  //   overflow: hidden;
  .van-icon {
    color: #c1c1c1;
  }
  .title-content {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-size: 20px;

    .begin-tille {
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 550;
      color: #262626;
      line-height: 28px;
    }
  }
  .sec-department {
    border: 1px solid #f4f4f4;
    padding: 5px 15px 0;
    margin: 0 16px;
    .title {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 550;
      color: #262626;
      padding: 15px 0;
    }
    .f-date {
      //   margin-top: 15px;
      .f-dates {
        height: 40px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f4f4f4;
      }
      .item-tit {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #5f5f5f;
      }
      .item-d-range {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 500;
        color: #262626;
      }
    }
  }
  .table-contain {
    margin: 13px 16px 0;
    padding: 5px 0 0;
    width: 343px;
    // height: 220px;
    background: #ffffff;
    box-shadow: 0px 4px 10px 0px rgba(238, 240, 245, 0.5);
    border-radius: 2px;
    border: 1px solid #f0f0f0;

    .title {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 550;
      color: #262626;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .van-button {
        height: 26px;
        color: #5177f4;
        i {
          color: #5177f4;
        }
      }
    }
    .detail-table {
      width: 100%;
      ul {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #64666c;
        // padding: 0 15px;
        text-align: center;
        li {
          height: 36px;
          display: flex;
          line-height: 36px;
          border-bottom: 1px solid #f4f4f4;
          &.li-list-one {
            background: #f4f4f4;
          }
          .check {
            flex: 1 1 50px;
          }
          .van-checkbox {
            display: inline-block;
            padding-top: 7px;
          }
          .name {
            // width: 50px;
            flex: 1 1 70px;
            overflow: hidden;

            // border: 1px solid red;
          }
          .sec {
            // width: 70px;
            flex: 1 1 100px;
            overflow: hidden;
            // border: 1px solid red;
          }
          .work {
            // width: 90px;
            // width: 90px;
            flex: 1 1 100px;
            overflow: hidden;

            // border: 1px solid red;
          }
        }
      }
    }
  }
  .white-content {
    height: 70px;
  }
  .star {
    color: #f00;
    padding-left: 2px;
    vertical-align: -3px;
  }
  .footer-contain {
    background: #fff;
    padding: 10px 16px;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .clear {
      width: 121px;
      height: 40px;
      border-radius: 2px;
      border: 1px solid #e0e0e0;
    }
    .confirm {
      width: 204px;
      height: 40px;
      background: #5177f4;
      border-radius: 3px;
    }
  }
  .van-action-sheet {
    max-height: 40%;
  }
}
</style>
