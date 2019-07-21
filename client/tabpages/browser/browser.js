// tabpages/browser/browser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    currentTab: 0,
    winHeight: 0,
    obje:[
      {
      id: '1',
      src: '../../images/01.jpg',
      avator: '../../images/01.jpg',
      title: '晨练',
      description: '照片01欢迎寰宇广东韶关发红包发绿光u打死回复客人反倒是光和热iu梵蒂冈v俄方'
      }, 
      {
        id: '2',
        src: '../../images/02.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"

      }
    ],
    obj: [
      {
        id: '1',
        src: '../../images/01.jpg',
        avator: '../../images/01.jpg',
        title:'晨练',
        description: '照片01欢迎寰宇广东韶关发红包发绿光u打死回复客人反倒是光和热iu梵蒂冈v俄方'
      },
       {
        id: '2',
        src: '../../images/02.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"
      }
      ],
      obj3:[{
        id: '3',
        src: '../../images/01.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"

      }, {
        id: '4',
        src: '../../images/02.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"
      },
       {
        id: '5',
        src: '../../images/01.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"

      }],
      obj4:[ {
        id: '6',
        src: '../../images/01.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"
      }, {
        id: '7',
        src: '../../images/02.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"
      }, {
        id: '8',
        src: '../../images/02.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"
      }, {
        id: '9',
        src: '../../images/01.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"
      }, {
        id: '10',
        src: '../../images/02.jpg',
        avator: '../../images/01.jpg',
        title: '晨练',
        description: "hello"
      }
    ]
  },

  bindchange: function (e) {
    console.log(e);
    var that = this;
    that.setData({
      currentTab: e.detail.current,
      flag: e.detail.current
    })
  },
  seeDetails: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../../pages/details/details?id=' + id,
    })
  },
  switchNav: function (e) {
    var that = this;
    console.log(e);
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      that.setData({ currentTab: id });
    }
    that.setData({
      flag: id
    })
  },
  createActivity: function () {
    wx.navigateTo({
      url: '../../pages/createActivity/createActivity',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        that.setData({
          winHeight: res.windowHeight
        });
      },
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