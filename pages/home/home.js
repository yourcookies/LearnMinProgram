// pages/home/home.js
Page({

  data:{
    name:'cookie',
    age:19,
    students:[
      { id: 110, name: 'keniv', age: 20 },
      { id: 120, name: 'money', age: 22 },
      { id: 130, name: 'james', age: 17 },
      { id: 140, name: 'hunry', age: 34 }
    ],
    counter:0
  },
  handleBthClick() {
    // 1, 错误做法: 界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2, this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }

})