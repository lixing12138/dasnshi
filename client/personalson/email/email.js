// pages/email/email.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:true
  },
  bindEmail:function(e){
    var that =this;
    var email= e.detail.value.email;
    var password = e.detail.value.password;
    if(password==''||email==''){
      that.setData({
        hidden: false
      })
    }
    var reg = new RegExp('^[a-zA-Z0-9]+@fudan.edu.cn$');
    console.log(reg.test(email));
    if(reg.test(email)){
      wx.showModal({
        title: '绑定成功',
        content: '绑定成功！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }else{
      that.setData({
        hidden:false
      })
    }
  },
  cancel:function(){
    var that = this;
    that.setData({
      hidden: true
    })
  },
  confirm: function () {
    var that = this;
    that.setData({
      hidden: true
    })
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