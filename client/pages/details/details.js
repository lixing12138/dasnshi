// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect: '../../img/collect.png',
    baoming:'../../img/baoming.png',
    name: '',
    description: '',
    cover: '',
    timeOfActivity: '',
    timeOfBaoming: '',
    place: '',
    creator: '',
    numberOfPeople: '',
    limitOfPeople: '',
    tipCollect:'',
    tipBaoming:''
  },
  changeCollect: function () {
    var that = this;
    that.setData({
      collect: this.data.collect == '../../img/collect.png' ? '../../img/collect2.png' : '../../img/collect.png',
      tipCollect: this.data.collect == '../../img/collect.png' ? '已收藏' : '取消收藏',
    }),
    wx.showToast({
      title: this.data.tipCollect,
      icon:'success',
      duration:2000,
      mask:true
    })
  },
  changeBaoming: function () {
    var that = this;
    that.setData({
      baoming: this.data.baoming == '../../img/baoming.png' ? '../../img/quxiao.png' : '../../img/baoming.png',
      tipBaoming: this.data.baoming == '../../img/baoming.png' ? '已报名' : '取消报名',
    }),
    wx.showToast({
      title: this.data.tipBaoming,
      icon: 'success',
      duration: 2000,
      mask: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      name:"一起刷段",
      description: "(1)用户在“活动浏览页“与”个人中心“可以进入活动创建页面。(2)	活动创建需要用户已注册（绑定邮箱）。",
      cover:'../../img/collect.png',
      timeOfActivity:"2018-8-1 00:00:00 ",
      timeOfBaoming: "2018-7-1 00:00:00 ",
      place:'309',
      creator:'lb',
      numberOfPeople:'6',
      limitOfPeople:'10'


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