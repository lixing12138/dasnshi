// pages/createActivity/createActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date_start_baoming:'2018-01-01',
    date_end_baoming:"2018-12-31",
    date_start_juban: '2018-01-01',
    date_end_juban: "2018-12-31",
    time_start_juban: '00:00',
    time_end_juban: "23:59",
    showNum:'hidden',
    coverPath:'',
    array: ['其他', '招聘', '运动', '讲座', '演出', '赛事','公益'],
    index:0
  },
  selectActivityType:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  bindStartBaoming:function(e){
    this.setData({
      date_start_baoming:e.detail.value
    })
  },
  bindEndBaoming: function (e) {
    this.setData({
      date_end_baoming: e.detail.value
    })
  },
  bindStartJuban: function (e) {
    this.setData({
      date_start_juban: e.detail.value
    })
  },
  bindEndJuban: function (e) {
    this.setData({
      date_end_juban: e.detail.value
    })
  },
  bindStartTime: function (e) {
    this.setData({
      time_start_juban: e.detail.value
    })
  },
  bindEndTime: function (e) {
    this.setData({
      time_end_juban: e.detail.value
    })
  },
  setNum:function(){
    var that =this;
    that.setData({
      showNum:this.data.showNum=='show'?'hidden':'show'
    })
  },
  uploadPic:function(){
    var that = this;
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths=res.tempFilePaths;
        console.log(tempFilePaths);
        that.setData({
          coverPath:tempFilePaths
        });
        // wx.uploadFile({
        //   url: '/',
        //   filePath: that.data.coverPath[0],
        //   name: '',
        // })
      },
    })
  },
  formSubmit:function(e){
    console.log(this.data.array[this.data.index]);//活动类型
    console.log(e.detail.value.place);//活动地点
    console.log(this.data.date_start_baoming);//报名开始日期
    console.log(this.data.date_end_baoming);//报名结束日期
    console.log(this.data.date_start_juban + " " + this.data.time_start_juban);//活动举办开始日期
    console.log(this.data.date_end_juban + " " + this.data.time_end_juban);//活动举办结束日期
    console.log(e.detail.value.titleOfActivity);//活动标题
    console.log(e.detail.value.descriptionOfActivity);//活动描述
    console.log(e.detail.value.isInfinite);//是否不限制人数
    if (!e.detail.value.isInfinite){
      console.log(e.detail.value.numOfPeople);//人数上限
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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