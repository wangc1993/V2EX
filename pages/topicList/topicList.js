let Api = require('../../utils/api.js');

Page({
  data: {
    hidden: false,
    topicList: []
  },
  // 获取最新数据
  fetchData: function (id) {
    let that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: Api.getNodeInfo({
        node_id: id
      }),
      success: function (res) {
        that.setData({
          topicList: res.data
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
  onLoad: function (options) {
    this.fetchData(options.id);
  }
})