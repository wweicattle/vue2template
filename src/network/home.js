import Vue from "vue";
import request from "./axios"

let tzid = 1;
let baseUrl = "/api";
let baseUrls = "/user";

// 获取部门数据
export function getDepartNameArr() {
  let url = baseUrl + "/att/getLevelOneDepartment";
  return request.post(url, {
    tzid
  })
}

// 获取部门数据
export function getTwoDepartNameArr(objs) {
  let url = baseUrl + "/att/getDepartment";
  let obj = {
    tzid, //套账
    ...objs,
    bmmc: "", //非必填部门名称
  };
  return request.post(url, obj)
}


// 获取部门数据
export function getPersonData(objs) {
  let url = baseUrl + "/att/getUserList";
  let obj = {
    tzid,
    rybh: "", //非必填
    ...objs
  }
  return request.post(url, obj)
}


// 获取用户身份
export function getUserDatas(token) {
  let url = baseUrls;
  let obj = {
    "action": "getUserInfo",
    "parameter": ["7815617dd98b20ae"],
    token
  }
  return request.post(url, obj)
}


// 获取签卡班次

export function getOrderDatas() {
  let url = baseUrls;
  let obj = {
    "action": "getSignClassList",
    "parameter": ["8813", "2020-03-03"]
  }
  return request.post(url, obj)
}



// 获取danci数据
export function getSymbol(objs) {
  let url = baseUrl + "/att/BSCardSave";
  let obj = 
    {
      "tzid": "1",
      "type": "s", //s=单次，m=多次
      "operation": "add", //新增add   修改mod
      "ids": "", //--单次签卡保存为空    （0）
      "bc": "B", //班次
      "qdqt": "1", //上午1， 下午2
      "date": "2021-03-01", //签卡时间
      "rybhs": "6375,6375", //签卡人员编号
      "qdyy": "签到原因测试",
      "exactids": "", //修改时才需要传入-att考勤的ids （0）
      "zdr": "sys"
    }
  
  return request.post(url, obj)
}


// 获取danci数据
export function getManybol(objs) {
  let url = baseUrl + "/att/BSCardSave";
  let obj = 
  {
        "tzid":"1",
        "type":"m", //s=单次，m=多次
        "operation":"add", //新增add   修改mod
        "ids":"", //--单次签卡保存为空
        "bc":"B",  //班次
         "qdqt":"1",//上午1， 下午2
         "date":"2021-03-01",//签卡时间
         "rybhs":"6375,6375", //签卡人员编号
         "qdyy":"签到原因测试",
         "exactids":"",//修改时才需要传入-att考勤的ids
         "zdr":"sys"
    }
  return request.post(url, obj)
}
getManybol().then(da=>{
  console.log(da);
})