// pages/paiming/paiming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'green',
    array: ['2015', '2016', '2017', '2018', '2019','2020','2021','2022'],
    objectArray: [
      {
        id: 0,
        name: '2015',
        class:'a'
      },
      {
        id: 1,
        name: '2016',
       class:'b'
      },
      {
        id: 2,
        name: '2017',
        class:'c'
      },
      {
        id: 3,
        name: '2018',
        class:'d'
      },
      {
        id: 4,
        name: '2019',
       class:'e'
      },
      {
        id: 5,
        name: '2020',
       class:'f'

      }
    ],
  studentdata:[
  {id:11, name:"盛逸超",class:'sheng', imgsrc:'https://www.et.ynu.edu.cn/appdd/uploads/20181060270/8/%E6%8E%92%E5%90%8D.png'},
   {id:22,name:"樊怡希",class:'fan',imgsrc:"https://www.et.ynu.edu.cn/appdd/uploads/20181060270/8/%E6%8E%92%E5%90%8D2.png"},
   {id:33,name:"赵志强",class:'zhao',imgsrc:'https://www.et.ynu.edu.cn/appdd/uploads/20181060270/8/%E6%8E%92%E5%90%8D(1).png'},
   {id:44,name:"沙和尚",class:'sha'},
   {id:55,name:"唐三藏",class:'tang'},
   {id:55,name:"孙悟空",class:'sun'},
   {id:55,name:"小龙女",class:'long'},
   {id:55,name:"杨过",class:'yang'},
   {id:55,name:"郭蓉",class:'guo'},
   {id:55,name:"令狐冲",class:'ling'},
  ],
choose: {id:'请选择',class:'ai'}


},
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
clickItem:function(e){
wx.showToast({
  title: '点击成功',
})

},
upper(e) {
  console.log(e)
},

lower(e) {
  console.log(e)
},

scroll(e) {
  console.log(e)
},

scrollToTop() {
  this.setAction({
    scrollTop: 0
  })
},

})