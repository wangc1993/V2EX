let Util = require('../../utils/util.js');
let Api = require('../../utils/api.js');

Page({
  data: {
    hidden: false,
    detail: {},
    replies: []//回复
  },
  fetchDetail: function(id){
    let that = this;
    wx.request({
      url: Api.getTopicInfo({
        id: id
      }),
      success: function (res) {
        res.data[0].created = Util.formatTime(Util.transLocalTime(res.data[0].created));
        that.setData({
          detail: res.data[0]
        })
        that.fetchReplies(id);
      }
    })
  },
  fetchReplies: function (id) {
    let that = this;
    wx.request({
      url: Api.getReplies({
        topic_id: id
      }),
      success: function (res) {
        res.data.forEach(function (item) {
          item.created = Util.formatTime(Util.transLocalTime(item.created));
        })
        that.setData({
          replies: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
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
  onLoad: function (options) {
    this.setData({
      hidden: false
    })
    this.fetchDetail(options.id);
  }
})