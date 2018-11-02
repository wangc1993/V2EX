let Api = require('../../utils/api.js');

Page({
  data: {
    hidden: false,
    latestList: []
  },
  // 获取最新数据
  fetchData: function(){
    let that = this;
    wx.request({
      url: Api.getLatestTopic({
        p: 1
      }),
      success: function (res) {
        that.setData({
          latestList: res.data
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
  redictDetail: function(e){
    let id = e.currentTarget.id,
    url = '../detail/detail?id=' + id;
    // 有返回键
    wx.navigateTo({
      url: url
    })
  },
  // 跳转到用户信息页
  toUserInfo: function(e){
    let id = e.currentTarget.id,
    url = '../userInfo/userInfo?id=' + id;
    wx.navigateTo({
      url: url
    })
  },
  onLoad: function(){
    this.fetchData();
  }
})