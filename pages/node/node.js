let Api = require('../../utils/api.js');

Page({
  data: {
    hidden: false,
    nodeList: []
  },
  // 获取最热数据
  fetchData: function () {
    let that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: Api.getAllNode(),
      success: function (res) {
        that.setData({
          nodeList: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function () {
    this.fetchData();
  }
})