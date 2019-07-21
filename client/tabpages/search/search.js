// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      {
        id: '1',
        src: '../../images/01.jpg',
        name: '照片01欢迎寰宇广东韶关发红包发绿光u打死回复客人反倒是光和热iu梵蒂冈v俄方',
        hot: '13',
        data: '2017/11/1'
      }, {
        id: '2',
        src: '../../images/02.jpg',
        name: '欢迎习近平',
        hot: '13',
        data: '2017/11/2'
      }, {
        id: '3',
        src: '../../images/01.jpg',
        name: '照片03',
        hot: '13',
        data: '2017/11/3'
      }, {
        id: '4',
        src: '../../images/02.jpg',
        name: '照片04',
        hot: '13',
        data: '2017/11/4'
      }, {
        id: '5',
        src: '../../images/01.jpg',
        name: '照片05',
        hot: '13',
        data: '2017/11/5'
      }, {
        id: '6',
        src: '../../images/01.jpg',
        name: '照片06',
        hot: '13',
        data: '2017/11/6'
      }, {
        id: '7',
        src: '../../images/02.jpg',
        name: '照片07',
        hot: '13',
        data: '2017/11/7'
      }, {
        id: '8',
        src: '../../images/02.jpg',
        name: '照片08',
        hot: '13',
        data: '2017/11/8'
      }, {
        id: '9',
        src: '../../images/01.jpg',
        name: '照片09',
        hot: '13',
        data: '2017/11/9'
      }, {
        id: '10',
        src: '../../images/02.jpg',
        name: '照片10',
        hot: '13',
        data: '2017/11/10'
      }, {
        id: '11',
        src: '../../images/01.jpg',
        name: '照片11',
        hot: '13',
        data: '2017/11/11'
      }, {
        id: '12',
        src: '../../images/02.jpg',
        name: '照片12',
        hot: '13',
        data: '2017/11/12'
      }, {
        id: '13',
        src: '../../images/01.jpg',
        name: '照片13',
        hot: '13',
        data: '2017/11/13'
      }, {
        id: '14',
        src: '../../images/02.jpg',
        name: '照片14',
        hot: '13',
        data: '2017/11/14'
      }, {
        id: '15',
        src: '../../images/01.jpg',
        name: '照片15',
        hot: '13',
        data: '2017/11/15'
      }, {
        id: '16',
        src: '../../images/01.jpg',
        name: '照片16',
        hot: '13',
        data: '2017/11/16'
      }, {
        id: '17',
        src: '../../images/01.jpg',
        name: '照片17',
        hot: '13',
        data: '2017/11/17'
      }, {
        id: '18',
        src: '../../images/02.jpg',
        name: '照片12',
        hot: '13',
        data: '2017/11/12'
      }, {
        id: '19',
        src: '../../images/02.jpg',
        name: '照片13',
        hot: '13',
        data: '2017/11/13'
      }, {
        id: '20',
        src: '../../images/02.jpg',
        name: '照片14',
        hot: '13',
        data: '2017/11/14'
      }, {
        id: '21',
        src: '../../images/01.jpg',
        name: '照片15',
        hot: '13',
        data: '2017/11/15'
      }, {
        id: '22',
        src: '../../images/02.jpg',
        name: '照片16',
        hot: '13',
        data: '2017/11/16'
      }, {
        id: '23',
        src: '../../images/01.jpg',
        name: '照片17',
        hot: '13',
        data: '2017/11/17'
      }, {
        id: '24',
        src: '../../images/01.jpg',
        name: '照片17',
        hot: '13',
        data: '2017/11/17'
      },
      {
        id: '25',
        src: '../../images/02.jpg',
        name: '照片16',
        hot: '13',
        data: '2017/11/16'
      }, {
        id: '26',
        src: '../../images/01.jpg',
        name: '照片17',
        hot: '13',
        data: '2017/11/17'
      }, {
        id: '27',
        src: '../../images/02.jpg',
        name: '照片17',
        hot: '13',
        data: '2017/11/17'
      },
    ],
    order_way: ["热度", "时间降序", "时间升序"],
    order: ["热度", "时间", "时间"],
    index: 0
  },

  bindPickerChange(e) {
    var that = this;
    that.setData({
      index: e.detail.value
    })
    console.log(this.data.order_way[this.data.index]);
  },
  search: function (e) {
    console.log(e.detail.value);//搜索的内容
  },
  seeDetails: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/details/details?id=' + id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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