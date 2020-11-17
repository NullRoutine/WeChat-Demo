// components/bottomdialog/bottomdialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false,
      observer: 'requestingShow',
    },
    dialogHeight: {
      type: Number,
      value: 50,
      observer: 'requestingHeight'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    animation: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    requestingShow: function (newVal, oldVal) {
      console.log('监听===》requestingShow', newVal, oldVal)
      let isShow = this.data.isShow
      if (oldVal === false && newVal === true) {
        // this.setData({
        //   isShow: !isShow
        // })
      }
    },
    close: function close() { //蒙层点击
      let isShowTemp = this.data.isShow
      this.setData({
        isShow: !isShowTemp
      })
    },
    touchMove: function (e) {

    }
  }
})