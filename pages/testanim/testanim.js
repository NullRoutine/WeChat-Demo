// pages/testanim/testanim.js
var systemInfo = wx.getSystemInfoSync()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animMain: {}, //旋转动画
    animAdd: {}, //item位移,透明度
    animDelLots: {}, //item位移,透明度
    isShowAnim: false, //是否已经弹出
    isShowModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //弹出动画
  popp: function () {
    //main按钮顺时针旋转
    var animationMain = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease-out'
    })
    var animationDelLots = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease-out'
    })
    var animationAdd = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease-out'
    })
    animationMain.rotateZ(180).step();
    console.log(systemInfo)
    animationDelLots.translate(0, -126 / 750 * systemInfo.windowWidth).rotateZ(180).opacity(1).step();
    animationAdd.translate(0, -252 / 750 * systemInfo.windowWidth).rotateZ(180).opacity(1).step();
    this.setData({
      animMain: animationMain.export(),
      animDelLots: animationDelLots.export(),
      animAdd: animationAdd.export(),
    })
  },
  //收回动画
  takeback: function () {
    //main按钮逆时针旋转
    var animationMain = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease-out'
    })
    var animationDelLots = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease-out'
    })
    var animationAdd = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease-out'
    })
    animationMain.rotateZ(0).step();
    animationDelLots.translate(0, 0).rotateZ(0).opacity(0).step();
    animationAdd.translate(0, 0).rotateZ(0).opacity(0).step();
    this.setData({
      animMain: animationMain.export(),
      animDelLots: animationDelLots.export(),
      animAdd: animationAdd.export(),
    })
  },
  //点击弹出或者收起
  showOrHide: function () {
    console.log('---------弹框')
    if (this.data.isShowAnim) {
      //缩回动画
      this.takeback();
      this.setData({
        isShowAnim: false
      })
    } else {
      //弹出动画
      this.popp();
      this.setData({
        isShowAnim: true
      })
    }
  },
  add: function () {
    this.showOrHide()
    this.setData({
      isShowModal: true
    })
  },
  deleteLots: function () {
    this.showOrHide()
    this.setData({
      isShowModal: false
    })
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

  }
})