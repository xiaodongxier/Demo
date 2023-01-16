$(function(){
  var htmlList = ['基础HTML树视图'];
  var cssCenter = ['基础CSS树视图美化','文字滑块颜色变化','报纸排版效果'];
  var jsRight = ['文字弯曲弧度效果','jQuery全屏滚动插件fullPage.js演示','12306网站404页面时间处理方案','swiper层叠翻页效果','swiper层叠轮播效果'];
  for(var i=0;i<htmlList.length;i++){
    $(".htmlWrap").append(`<li><a href="./HTML/${htmlList[i]}" target="_blank" rel="noopener noreferrer">${htmlList[i]}</a></li>`)
  }
  for(var i=0;i<cssCenter.length;i++){
    $(".cssWrap").append(`<li><a href="./CSS/${cssCenter[i]}" target="_blank" rel="noopener noreferrer">${cssCenter[i]}</a></li>`)
  }
  for(var i=0;i<jsRight.length;i++){
    $(".jsWrap").append(`<li><a href="./JAVASCRIPT/${jsRight[i]}" target="_blank" rel="noopener noreferrer">${jsRight[i]}</a></li>`)
  }
})