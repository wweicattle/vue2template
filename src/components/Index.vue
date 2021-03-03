<template>
  <div class="free-contains">
    <div class="title-content">因公免签卡申请</div>
    <div
      class="f-bordr-title"
      :style="{ 'background-image': 'url(' + backImage + ')' }"
    >
      <span @click="clickTabChangeBtn(1)">多次免签</span>
      <span @click="clickTabChangeBtn(2)">单次免签</span>
    </div>
    <div class="f-borders-content">
      <div v-if="ismanyOrder" class="better-state">
        <div class="f-date">
          <div class="f-dates">
            <span class="item-tit">开始时间<span class="star">*</span></span>
            <span class="item-d-range"
              >{{ begindatenum
              }}<van-icon name="arrow-down" @click="showDate = true" />
              <van-popover
                v-model="showPopover"
                trigger="click"
                :actions="actions"
                @select="onstarTimeSelect"
              >
                <template #reference> {{ startclass }} </template>
              </van-popover>
              <!-- <span @click="showDateRange = true">上午</span
              > -->

              <van-icon name="arrow-down"
            /></span>
          </div>
        </div>
        <div class="f-end-date">
          <div class="f-dates">
            <span class="item-tit">结束时间<span class="star">*</span></span>
            <span class="item-d-range"
              >{{ overDateNum
              }}<van-icon name="arrow-down" @click="overDate = true" />
              <van-popover
                v-model="showEndPopover"
                trigger="click"
                :actions="actions"
                @select="onEndTimeSelect"
              >
                <template #reference> {{ endclass }} </template> </van-popover
              ><van-icon name="arrow-down"
            /></span>
          </div>
        </div>
        <div class="free-day-num">
          <span class="item-tit">免签天数</span>
          <span class="item-d-range">{{ reduceDayNum }}天</span>
        </div>
      </div>
      <div v-else class="better-state">
        <div class="f-date">
          <div class="f-dates">
            <span class="item-tit">签卡日期<span class="star">*</span></span>
            <span class="item-d-range"
              >{{ overDateNu
              }}<van-icon name="arrow-down" @click="showDatess = true"
            /></span>
          </div>
        </div>
        <div class="f-date-num">
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
                  {{ selectName }}<van-icon name="arrow-down" />
                </template>
              </van-popover>

              <van-popover
                v-model="showPopover"
                trigger="click"
                :actions="actions"
                @select="onSelect"
              >
                <template #reference>
                  {{ nowtimeState }} <van-icon name="arrow-down" />
                </template>
              </van-popover>
            </span>
          </div>
        </div>
        <div class="order-class">
          <van-notice-bar left-icon="info-o">
            选择人员才会出现所排的班次。
          </van-notice-bar>
        </div>
      </div>

      <div class="free-day-solve">
        <span class="item-tit">免签事由</span>
      </div>
      <textarea
        name=""
        id=""
        placeholder="请填写免签卡事由"
        v-model="manyOrderText"
      ></textarea>

      <div class="add-per-content">
        <span class="item-tit">添加人员<span class="star">*</span></span>
        <span class="item-d-range">
          <span style="color:#999">去添加</span><van-icon name="arrow-down" @click="returnAddPersonPage"
        /></span>
      </div>

      <div class="item-p-content">
        <ul>
          <template v-for="(val, index) in userselectData">
            <li :key="index">
              <span>{{ val.xm }}</span
              ><van-icon name="cross" @click="deletePerClick(index)" />
            </li>
          </template>
          <div
            style="margin: 30px auto; color: #999"
            v-if="userselectData.length == 0"
          >
            无用户数据
          </div>
          <!-- <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li>
          <li><span>李某某</span><van-icon name="cross" /></li> -->
        </ul>
      </div>
    </div>
    <div class="white-contain"></div>
    <div class="footer-content">
      <div class="f-left">
        <div class="detail-num">
          {{ userselectData.length > 0 ? userselectData.length : 0 }}人
        </div>
        <div class="select-p">已选择人数</div>
      </div>
      <div class="f-right">
        <van-button type="primary" size="large" @click="saveData"
          >保存</van-button
        >
        <!-- <button>保存</button> -->
      </div>
    </div>

    <!-- <van-action-sheet
      v-model="showDateRange"
      :actions="action"
      @select="onSelects"
    /> -->
    <!-- 开始时间日历 -->
    <van-calendar
      v-model="showDate"
      @confirm="onConfirmDate"
      :min-date="startminDate"
      :max-date="startmaxDate"
    />

    <!-- 结束时间日历 -->
    <van-calendar
      v-model="overDate"
      @confirm="onConfirmDates"
      :min-date="overminDate"
      :max-date="overmaxDate"
    />

    <!-- 开始时间日历 -->
    <van-calendar
      v-model="showDatess"
      @confirm="onConfirmDatess"
      :min-date="startminDate"
      :max-date="startmaxDate"
    />
  </div>
</template>

<script>
import { getSymbol, getManybol } from "network/home";
import { eventBus } from "utils/eventbus";
// import axios from "axios"
// axios.post("http://tm.lilanz.com/oa/project/MobileApplyCheck/applycheckcore.ashx",{"action":"getUserInfo","parameter":["7815617dd98b20ae"],"token":"7815617dd98b20ae"}).then(da=>{
//   console.log(da);
// })
export default {
  name: "Index",
  data() {
    return {
      showPopover: false,
      showEndPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: "上班" }, { text: "下班" }],
      action: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      showDateRange: false,
      backImage: "static/img/left.png",
      ismanyOrder: true,
      showDate: false,
      begindatenum: new Date().toLocaleDateString().replace(/\//g, "-"),
      startminDate: new Date(2020, 6, 1),
      startmaxDate: new Date(),
      overminDate: new Date(2020, 6, 1),
      overmaxDate: new Date(),
      overDate: false,
      showDatess: false,
      overDateNum: new Date().toLocaleDateString().replace(/\//g, "-"),
      reduceDayNum: 0,
      startclass: "上班",
      endclass: "上班",
      manyOrderText: "this is",
      showOrderPopover: false,
      orderactions: [],
      overDateNu: new Date().toLocaleDateString().replace(/\//g, "-"),
      selectName: "请选择",
      nowtimeState: "上班",
      userselectData: [],
      tabselect: 1,
    };
  },
  created() {
    eventBus.$on("ss", (val) => {
      let obj = JSON.parse(window.localStorage.getItem("selectOrderData"));
      let objs = JSON.parse(window.localStorage.getItem("selectuser"));
      console.log(obj);
      console.log(objs);
      this.orderactions = obj;
      this.selectName = obj[0].text;
      this.userselectData = objs;
    });
     if(window.localStorage.getItem("statePage")==1){
      this.isshowMany=false
      this.clickTabChangeBtn(1)
    }else{
            this.clickTabChangeBtn(2)


    }
    
  },
  mounted() {},
  methods: {
    returnAddPersonPage(){
      window.localStorage.setItem("statePage",this.tabselect)
      this.$router.push('/addPerson');
    },
    deletePerClick(index) {
      this.userselectData.splice(index, 1);
    },
    saveData() {
      console.log(getSymbol);
      if (this.userselectData.length == 0) {
        return this.$notify({
          type: "warning",
          message: "请添加人员，再保存！",
        });
      }
      if (this.tabselect == 1) {
        getManybol().then((da) => {
          if (da.data.errcode == 0) {
            this.$notify({
              type: "success",
              message: "成功多次签卡",
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        });
      } else {
        getSymbol().then((da) => {
          console.log(this.overDateNu);
          // console.log(this.);
          console.log(da);
          if (da.data.errcode == 0) {
            this.$notify({
              type: "success",
              message: "成功单次签卡",
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        });
      }
    },
    // 计算天数
    computeDay() {
      // 进行计算相差天数
      let over = this.overDateNum.split("-");
      var startDay = Date.parse(new Date(...over));
      let over1 = this.begindatenum.split("-");
      var overDay = Date.parse(new Date(...over1));
      var day = parseInt((startDay - overDay) / (1000 * 60 * 60 * 24)); //核心：时间戳相减，然后除以天数
      if (this.startclass == this.endclass) {
        this.reduceDayNum = day;
      } else {
        if (this.startclass == "上班" && this.endclass == "下班") {
          this.reduceDayNum = day + 0.5;
        } else {
          this.reduceDayNum = day - 0.5;
        }
      }
      // 免签是负数的天数就是错误
      if (this.reduceDayNum < 0) {
        this.$notify({
          type: "warning",
          message: "日期范围错误，请重新选择！已重置",
        });
        setTimeout(() => {
          this.endclass = "上班";
          this.startclass = "上班";
          this.begindatenum = this.overDateNum = new Date()
            .toLocaleDateString()
            .replace(/\//g, "-");
        }, 300);
      }
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onSelect(action) {
      //   Toast(action.text);
      this.nowtimeState = action.text;
    },
    onstarTimeSelect(action) {
      this.startclass = action.text;
    },
    onEndTimeSelect(action) {
      this.endclass = action.text;
    },
    onSelects(action) {
      this.selectName = action.text;
    },
    clickTabChangeBtn(state) {
      this.tabselect = state;
      // 1代表多次免签
      if (state == 1) {
        this.backImage = "static/img/left.png";
        this.ismanyOrder = true;
      }
      // 2代表单次免签
      else {
        this.backImage = "static/img/right.png";
        this.ismanyOrder = false;
      }
    },
    onConfirmDate(date) {
      this.showDate = false;
      this.begindatenum = this.formatDate(date);
    },
    onConfirmDates(date) {
      this.overDate = false;
      this.overDateNum = this.formatDate(date);
    },
    onConfirmDatess(date) {
      this.showDatess = false;
      this.overDateNu = this.formatDate(date);
    },
  },
  watch: {
    begindatenum(newVal) {
      let arr = newVal.split("-");
      // 设置必须月份进行减1
      this.overminDate = new Date(
        Number(arr[0]),
        Number(arr[1]) - 1,
        Number(arr[2])
      );
      this.computeDay();
    },
    overDateNum(newVal) {
      this.computeDay();
    },
    endclass() {
      this.computeDay();
    },
    startclass() {
      this.computeDay();
    },
  },
};
</script>

<style  lang="scss">
.free-contains {
  //   height: 100%;
  position: relative;
  width: 375px;
  //   height: 812px;
  background: #f7f7f7;
  position: relative;
  .title-content {
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 550;
    color: #262626;
    line-height: 28px;
    padding: 25px 0;
    margin-left: 16px;
  }
  .f-bordr-title {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 550;
    color: #262626;
    width: 343px;
    height: 38px;
    line-height: 38px;
    // background: url("./../assets/img/tab_right@2x.png");
    background-size: cover;
    margin: 0 auto;
  }
  .f-borders-content {
    width: 343px;
    background: #ffffff;
    border-radius: 0px 0px 6px 6px;
    margin: 0 auto;
    padding: 0 15px;

    textarea {
      width: 313px;
      height: 104px;
      border-radius: 4px;
      border: 1px solid #e8e8e8;
      font-size: 14px;
      padding-top: 8px;
      padding-left: 6px;
      &::placeholder {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #aeaeae;
      }
    }
    .star {
      color: #f00;
      padding-left: 2px;
      vertical-align: -3px;
    }
    & > .better-state {
      & > div {
        // margin: 10px 0;
      }
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
    .f-date {
      margin-top: 25px;
      .f-dates {
        //   margin-top: 25px;
        height: 40px;
        align-items: center;
        display: flex;
        justify-content: space-between;

        border-bottom: 1px solid #f4f4f4;
      }
    }
    .f-date-num {
      .f-dates {
        height: 40px;
        align-items: center;
        display: flex;
        justify-content: space-between;

        border-bottom: 1px solid #f4f4f4;
      }
    }
    .f-end-date {
      .f-dates {
        height: 40px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f4f4f4;
      }
    }
    .add-per-content {
      height: 40px;
      align-items: center;
      display: flex;
      justify-content: space-between;

      border-bottom: 1px solid #f4f4f4;
    }
    .free-day-num {
      height: 40px;
      align-items: center;
      display: flex;
      justify-content: space-between;

      border-bottom: 1px solid #f4f4f4;
    }
    .free-day-solve {
      height: 40px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      //   border-bottom: 1px solid #f4f4f4;
    }
    .item-p-content {
      ul {
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 550;
        color: #585858;
        li {
          margin: 15px 0px;
          height: 34px;
          padding: 0 6px;
          background: #f3f6fd;
          border-radius: 4px;
          display: flex;
          align-items: center;
          .van-icon {
            padding-left: 3px;
            color: #5177f4;
          }
        }
      }
    }
  }
  .white-contain {
    height: 70px;
  }
  .van-icon {
    color: #b1b1b1;
    font-size: 12px;
  }
  .footer-content {
    border-top: 1px solid #f4f4f4;
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    .f-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .detail-num {
        font-size: 20px;
        font-family: SFProText-Medium, SFProText;
        font-weight: 500;
        color: #262626;
        line-height: 18px;
      }
      .select-p {
        padding-top: 5px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #8f8f91;
      }
    }
    .f-right {
      .van-button {
        width: 177px;
        height: 40px;
        background: #5177f4;
        // padding-bottom: 3px;
      }
    }
  }
}
.van-popup {
  .van-popover__content {
    .van-popover__action {
      width: 100px;
    }
  }
}
</style>
