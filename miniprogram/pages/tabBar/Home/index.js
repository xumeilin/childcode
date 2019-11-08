Page({
  data: {
     imgUrls: [
      '../../../images/banner.jpg',
      '../../../images/banner.jpg',
      '../../../images/banner.jpg'
    ],
    
    indicatorDots: true,
    indicatorcolor: "rgba(119, 119, 119, 1)",
    indicatoractivecolor: "#0f7cb7",
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imgheights: [],
    imgwidth: 750,
    current: 0,
    scrollx:true,
    scrollleft:0
  },


  imageLoad: function (e) {//获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
      // console.log(imgwidth, imgheight);
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },

  bindchange: function (e) {
    this.setData({ current: e.detail.current })
  },

})

