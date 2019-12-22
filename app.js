App({

  /**
   * 生命周期函数
   * 当小程序初始化完成时，会执行的生命周期函数
   */
  onLaunch: function() {
    console.log('1,小程序初始化完成:onlaunch')
    // 异步调用
    // wx.getUserInfo({
    //   // 数据拿到之后, 在进行回调的
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    setTimeout(function(){
      const err = new Error()
      throw err
    },3000)
  },

  /**
   * 当小程序界面显示出来后执行的生命周期函数
   */
  onShow: function(options) {
    console.log('2,界面显示出来：onshow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {
    console.log('界面被隐藏时会执行: onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log('小程序发生一些错误时会执行')
  }
})