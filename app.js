//app.js
import HttpRequest from './utils/HttpRequest.js'

//重写console.log方法，判断是否开启日志调试模式，否则就不输出
console.log = (function (LogFunc) {
  return function () {
    if (getApp().globalData.debug) {
      LogFunc.call(console, ...arguments)
    }
  }
})(console.log)

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
     //开启日志
     debug: true
  },
  //吐司不带图标
  toast: function (title) {
    if (typeof (title) != 'string') {
      title = JSON.stringify(title);
    }
    wx.showToast({
      title: title || '未知',
      icon: 'none',
      duration: 1500,
      // success: () => {
      //   wx.hideToast()
      // },
    });
  },
  getHttpRequest: function () {
    return HttpRequest;
  },
})