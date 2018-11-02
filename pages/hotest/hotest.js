let Api = require('../../utils/api.js');

Page({
  data: {
    hidden: false,
    hotestList: []
  },
  // 获取最热数据
  fetchData: function () {
    let that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: Api.getHotestTopic({
        p: null
      }),
      success: function (res) {
        that.setData({
          hotestList: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  // 跳转到详情
  redictDetail: function (e) {
    let id = e.currentTarget.id,
      url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url
    })
  },
  // 跳转到用户信息页
  toUserInfo: function (e) {
    let id = e.currentTarget.id,
      url = '../userInfo/userInfo?id=' + id;
    wx.navigateTo({
      url: url
    })
  },
  onLoad: function () {
    this.fetchData();
  }
})