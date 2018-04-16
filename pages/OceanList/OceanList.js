//获取应用实例
var app = getApp()

// pages/OceanList/OceanList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subtitle: '请在此输入搜索内容',
    dataList: [],
    search: {},
    loading: false,
    hasMore: false,
    Domain: app.globalData.Domain +'/Carrier/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    options.page = 1;
    this.handleSearch(options);
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
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 自定义函数
   */
  loadMore() {
    var that = this;
    if (!that.data.hasMore) return
    that.setData({ subtitle: '加载中...', loading: true })
    var list = [];
    //wx.showLoading({ title: '拼命加载中...' })

    wx.request({
      url: app.globalData.Domain + '/OceanFreight/PhoneOceanFreight',
      data: that.data.search,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        list = res.data.Source.OceanFreightList;
        if (list.length) {
          that.setData({ subtitle: '', dataList: that.data.dataList.concat(list), loading: false })
        } else {
          that.setData({ hasMore: false, loading: false })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    });
  },

  handleSearch(options) {
    if (!options) return
    var that=this;
    that.setData({ subtitle: '加载中...', hasMore: true, loading: true, search: options })
    that.loadMore()
  }

})