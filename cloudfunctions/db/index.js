// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();
var db = cloud.database();
var _ = db.command;

//更新我的任务函数
function upData(event, context) {
  return new Promise(function (resolve, reject) {
    db.collection('user').where({
      openId: event.userInfo.openId
    }).update({
      data: {
        list: _.push(event.list)
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}

//增加用户信息函数
function add(event, context) {
  return new Promise(function (resolve, reject) {
    db.collection('user').add({
      data: {
        openId: event.userInfo.openId,
        list: event.list,
        date: Date.now()
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
};

//获取个人数据
function getInfo(event, context) {
  return db.collection('user').where({
      openId: event.userInfo.openId
    }).get()
};

//获取个人任务列表
function getList(event, context) {
  return db.collection('taskList').where({
    _id: _.in(event.taskIndex)
  }).get()
}

//获取全部任务函数
function getData(event, context) {
  return db.collection('taskList').get();
};

// 云函数入口函数
exports.main = async (event, context) => {
  console.log('调用云函数成功');
  console.log(event);

  if (event.type === 'add') {
    return add(event, context);
  } else if (event.type === 'up') {
    return upData(event, context);
  } else if (event.type === 'get') {
    return getData(event, context);
  } else if (event.type === 'getInfo') {
    return getInfo(event, context);
  } else if (event.type === 'getList') {
    return getList(event, context);
  }
}