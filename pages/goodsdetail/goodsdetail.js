Page({
  data: {
    showView1: true,
    showView2: true,
    cateItems: [{
        cate_id: 1,
        cate_name: "拉伸叫叫",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '拉伸叫叫',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117972563.jpg"
          },
          {
            child_id: 2,
            name: '拉伸叫叫',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161207/148110444480.jpg"
          },
          {
            child_id: 3,
            name: '拉伸叫叫',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117973270.jpg"
          },
          {
            child_id: 4,
            name: '拉伸叫叫',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117981591.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "超萌系列",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '超萌系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381301.jpg"
          },
          {
            child_id: 2,
            name: '超萌系列/超萌系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381411.jpg"
          },
          {
            child_id: 3,
            name: '超萌系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815181.jpg"
          },
          {
            child_id: 4,
            name: '超萌系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815759.jpg"
          },
          {
            child_id: 5,
            name: '超萌系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153816983.jpg"
          },
          {
            child_id: 6,
            name: '超萌系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153817721.jpg"
          },
          {
            child_id: 7,
            name: '超萌系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153819354.jpg"
          },
          {
            child_id: 8,
            name: '超萌系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161215/148179053369.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "拉环系列",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '拉环系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
          },
          {
            child_id: 2,
            name: '拉环系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159789883.jpg"
          },
          {
            child_id: 3,
            name: '拉环系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815979307.jpg"
          },
          {
            child_id: 4,
            name: '拉环系列',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159765589.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "小怪兽系列",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  todetail:function(e){
    wx.navigateTo({
      url: '../pagedetail/pagedetail',
    })
  },

  onLoad: function(options) {
    showView1: (options.showView1 == "true" ? true : false);
      showView2: (options.showView2 == "true" ? true : false)
  },
  onChangeShowState: function(options) {
    var that = this;
    that.setData({
      showView1: (!that.data.showView1)
    })

  },
 onChangeguiwei: function (options) {
    var that = this;
    that.setData({
      showView2: (!that.data.showView2)
    })

  }

})