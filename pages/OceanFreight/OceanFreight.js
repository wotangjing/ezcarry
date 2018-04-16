//获取应用实例
var app = getApp()

// pages/OceanFreight/OceanFreight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  },


  /**
   * 用户自定义
  */
  OceanList:function()
  {
    //取到查询条件
    wx.navigateTo({
      url: '../OceanList/OceanList',
    })
  },
  formSubmit: function (e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var load = e.detail.value.load;
    var discharge = e.detail.value.discharge;
    var url = '../OceanList/OceanList?load=' + load + '&discharge=' + discharge;
    //console.log(url);
    wx.navigateTo({
      url: url,
    })
  }

})