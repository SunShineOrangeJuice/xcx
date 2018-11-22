// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    itemList:[
      {
        img:'/images/guiwei.png',
        name:'拉伸叫叫',
        price:'¥24'
      },
      {
        img: '/images/guiwei.png',
        name: '拉伸叫叫',
        price: '¥24'
      },
      {
        img: '/images/guiwei.png',
        name: '拉伸叫叫',
        price: '¥24'
      },
      {
        img: '/images/guiwei.png',
        name: '拉伸叫叫',
        price: '¥24'
      },
      {
        img: '/images/guiwei.png',
        name: '拉伸叫叫',
        price: '¥24'
      },
      {
        img: '/images/guiwei.png',
        name: '拉伸叫叫',
        price: '¥24'
      },
      {
        img: '/images/guiwei.png',
        name: '拉伸叫叫',
        price: '¥24'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options && options.searchValue) {
      this.setData({
        searchValue: "搜索：" + options.searchValue
      });
    }
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
  
  },
  // 搜索入口  
  wxSearchTab: function () {
    wx.redirectTo({
      url: '../search/search'
    })
  }

})