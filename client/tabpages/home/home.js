// tabpages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityObj: [],
    imgUrl:'http://img6.bdstatic.com/img/image/smallpic/PPT1215.jpg',//图片地址
    people:22
  },
  initData: function () {
    var array = [];
    var obj = new Object();
    obj.cover = '../../img/bk.jpg';
    obj.name = '欢迎习近平莅临我校';
    obj.type = '大事儿';
    array[0] = obj;
    array[1] = obj;
    array[2] = obj;
    array[3] = obj;
    return array;
  },
  seeDetails: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../../pages/details/details?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.initData();
    this.setData({ activityObj: array });
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