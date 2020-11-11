const app = getApp()
//index.js

Page({

  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {


    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    TaskList: []
  },

  /**
   * 任务列表收缩核心代码
   */
  kindToggle(e) {
    const id = e.currentTarget.id;
    const list = this.data.TaskList
    for (let i = 0, len = 4; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }

    /**
     * key和value名称一样时，可以省略
     *
     * list:list=>list
     */
    this.setData({
      TaskList: list
    })
  },

  //页面出现时
  onShow: function () {
    var that = this;
    //开始调用云函数
    wx.cloud.callFunction({
      // 云函数名称
      name: 'db',
      // 传给云函数的参数
      data: {
        type: 'getInfo'
      },
      success: function (res) {
        console.log("获取索引成功");
        var taskIndex = res.result.data[0].list || {};
        // console.log(taskIndex);
        that.getLIst(taskIndex);
        // that.dealData(result.data, function (data) { //把res.data传到dalData函数做处理，并返回处理结果到data
        //         console.log(data);
        //         const content = [
        //           {
        //             id: 'MeiR',
        //             class: "MeiR-item",
        //             title: '每日',
        //             open: true,
        //             pages: data.MeiR
        //           },
        //           {
        //             id: 'ZhuXian',
        //             class: "ZhuXian-item",
        //             title: '主线',
        //             open: false,
        //             pages: data.ZhuXian
        //           },
        //           {
        //             id: 'ZhiXian',
        //             class: "ZhiXian-item",
        //             title: '支线',
        //             open: false,
        //             pages: data.ZhiXian
        //           },

        //           {
        //             id: 'FuBen',
        //             class: "FuBen-item",
        //             title: '副本',
        //             open: false,
        //             pages: data.FuBen
        //           }

        //         ];

        //       });
      },
      fail: console.error
    })
  },

  //获取任务列表
  getLIst: function (res) {
    var that = this;
    // console.log(res)
    wx.cloud.callFunction({
      // 云函数名称
      name: 'db',
      // 传给云函数的参数
      data: {
        type: 'getList',
        taskIndex: res
      },
      success: function (res) {
        console.log("获取任务列表成功");
        // console.log(res)
        var result = res.result || {};
        that.dealData(result.data, function (data) { //把res.data传到dalData函数做处理，并返回处理结果到data
          console.log(data);
          const content = [{
              id: 'MeiR',
              class: "MeiR-item",
              title: '每日任务',
              open: false,
              pages: data.MeiR
            },
            {
              id: 'ZhuXian',
              class: "ZhuXian-item",
              title: '主线任务',
              open: false,
              pages: data.ZhuXian
            },
            {
              id: 'ZhiXian',
              class: "ZhiXian-item",
              title: '支线任务',
              open: false,
              pages: data.ZhiXian
            },

            {
              id: 'FuBen',
              class: "FuBen-item",
              title: '副本任务',
              open: false,
              pages: data.FuBen
            }

          ];
          that.setData({
            TaskList: content
          });
        });
        // var list = res.result.data[0].list || {};
        // console.log(list)

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

  //添加任务
  GotoTaskList: function () {
    wx.navigateTo({
      url: '../page3/page3'
    })
  },

  //查看任务详情函数
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