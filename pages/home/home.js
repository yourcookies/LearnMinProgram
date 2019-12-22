// pages/home/home.js


// getApp()可以获取App()产生的示例对象
// const app = getApp()

// const name = app.globalData.name;
// const age = app.globalData.age;


// ----------------------   课程分割    -----------------------





// -------------   2, 初始化数据, 以方便被wxml引用展示     -------------

// 注册一个页面
// 页面也有自己的生命周期函数

Page({

  data: {
    message: '哈哈哈',
    list: []
  },

  // ------    1, 监听 在页面的生命周期函数发送网络请求, 从服务器获取数据    -------

  //  函数定义的三种写法:
  //    1, onload:functoin()
  //    2, onload(){} 是 onload:functoin() 的es6对象的(函数)增强写法
  //    3, success:() => {}    es6语法


  // 1, 页面被加载出来
  onLoad() {
    console.log('onLoad')

    // 演示网络请求:   此时仅仅是->演示
    // wx.request({
    //   url: 'http://123.207.32.31:8000/recommend',
    //   success: (res) => {
    //     console.log(res)
    //     const data = res.data.data.list;
    //     this.setData({
    //       list: data
    //     })
    //   }
    // })

  },

  // 2, 页面显示出来时
  onShow() {
    console.log('onShow')
  },

  // 3, 页面(初次)渲染完成时回调
  onReady() {
    console.log('onReady')
  },

  // 4, 页面隐藏
  onHide() {
    console.log('onHide')
  },

  // 5, onUnload页面跳转
  onUnload() {
    console.log('onUnload')
  },




  // -------------   3, 监听wxml中相关的一些事件, 绑定对应事件函数    -------------

  handleGetUserInfo(event) {
    console.log(event)
  },

  handleViewClick() {
    console.log('哈哈哈被点击了');
  },






  // -------------            4, 其他事件            -------------

  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },

  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },

  // 监听下拉刷新事件
  onPullDownRefresh() {
    console.log('下拉刷新事件执行')
  }

})