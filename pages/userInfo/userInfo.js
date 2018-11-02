let Api = require('../../utils/api.js');
let Util = require('../../utils/util.js');

Page({
  data: {
    hidden: false,
    userInfo: {}
  },
  // 获取最新数据
  fetchData: function (id) {
    let that = this;
    wx.request({
      url: Api.getUserInfo({
        id: id
      }),
      success: function (res) {
        res.data.created = Util.formatTime(Util.transLocalTime(res.data.created));
        that.setData({
          userInfo: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function (options) {
    this.fetchData(options.id);
  }
})