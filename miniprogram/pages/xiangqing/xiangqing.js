// pages/xiangqing/xiangqing.js
import CustomPage from '../../base/CustomPage'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '无偿献血',
    when: '全年',
    where: '点击查询',
    text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setData({
  name: app.globalData.viewTitle,
  text: app.globalData.viewText,
  image:app.globalData.viewImage,
  were: app.globalData.viewWere,
  when: app.globalData.viewWhen,
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})