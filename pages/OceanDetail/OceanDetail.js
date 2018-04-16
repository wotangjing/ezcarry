// pages/OceanDetail/OceanDetail.js
//获取应用实例
var app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    OceanFreightId: '',
    detailItem: {},
    Domain: app.globalData.Domain + '/Carrier/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (null == options.OceanFreightId || "undefined" == typeof (options.OceanFreightId) || "" == options.OceanFreightId){
      options.OceanFreightId ="675bae3b-32ee-4fa4-9c1c-a75800cf8a8f";
    }
    that.setData({ OceanFreightId: options.OceanFreightId });
    that.handleDetail(options.OceanFreightId);
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
    console.log('刷新');
    console.log('this.data.OceanFreightId');
    this.handleDetail(this.data.OceanFreightId);
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

  /**
   * 自定义函数
   */
  handleDetail(OceanFreightId) {
    var that = this;
    wx.request({
      url: app.globalData.Domain + '/OceanFreight/PhoneOceanFreightById?id=' + OceanFreightId,
      data: {},
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var item = res.data.Source;
        if (item) {
          //赋值前处理数据
          that.setData({ detailItem: item });
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    });
  }
})