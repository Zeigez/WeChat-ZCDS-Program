const app = getApp()

// const {
//   fail
// } = require("assert");

Page({
  data: {
    tabs: [],
    activeTab: 0,
  },

  onLoad() {
    // const titles = ['zhuXianList', 'zhiXianList', 'fuBenList', 'meiEList'];
    // const tabs = titles.map(item => ({
    //   title: item,
    // }));
    var that = this;

    //开始调用云函数
    wx.cloud.callFunction({
      // 云函数名称
      name: 'db',
      // 传给云函数的参数
      data: {
        type: 'get'
      },
      success: function (res) {
        // console.log("获取成功");
        // console.log(res);
        var result = res.result || {};
        that.dealData(result.data, function (data) { //把res.data传到dalData函数做处理，并返回处理结果到data
          console.log(data);
          const content = [{
              id: 'MeiR',
              class: "MeiR-item",
              title: '每日',
              open: true,
              pages: data.MeiR
            },
            {
              id: 'ZhuXian',
              class: "ZhuXian-item",
              title: '主线',
              open: false,
              pages: data.ZhuXian
            },
            {
              id: 'ZhiXian',
              class: "ZhiXian-item",
              title: '支线',
              open: false,
              pages: data.ZhiXian
            },

            {
              id: 'FuBen',
              class: "FuBen-item",
              title: '副本',
              open: false,
              pages: data.FuBen
            }

          ];
          that.setData({
            tabs: content
          });
        });
      },
      fail: console.error
    })

  },

  //数据处理函数
  dealData: function (list, callback) {
    // console.log("kaishi")
    var fileList = {
      MeiR: [],
      ZhuXian: [],
      ZhiXian: [],
      FuBen: []
    };
    list.forEach(function (item) { //使用forEach函数遍历list，把数据提取出来

      if (item.id == "MeiR") fileList.MeiR.push(item);
      if (item.id == "ZhuXian") fileList.ZhuXian.push(item);
      if (item.id == "ZhiXian") fileList.ZhiXian.push(item);
      if (item.id == "FuBen") fileList.FuBen.push(item);
    });

    callback(fileList) //返回fileList到callback
  },


  //以下为tab切换函数
  onTabCLick(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
  },
  //以上为tab切换函数

  //以下为form事件
  formSubmit: function (e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var value = e.detail.value
    var userTask = value.MeiR.concat(value.ZhuXian).concat(value.ZhiXian).concat(value.FuBen)
    //开始调用云函数
    wx.cloud.callFunction({
      // 云函数名称
      name: 'db',
      // 传给云函数的参数
      data: {
        type: 'up',
        list: userTask
      },
      success: function (res) {
        console.log("添加任务成功", res)
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        });
        that.formReset()
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  //以上为form事件

  //查看任务详情
  gotoXiangqing: function (e) {
    app.globalData.viewTitle = e.currentTarget.dataset.title;
    app.globalData.viewText = e.currentTarget.dataset.text;
    app.globalData.viewImage = e.currentTarget.dataset.image;
    // console.log(app.globalData);

    wx.navigateTo({
      url: '../xiangqing/xiangqing'
    })

  }

})