class MainBox {
  constructor(data) {
    this.data = data;
  }
  //接口
  init() {
    this.renderUI();
  }
  //渲染
  renderUI() {
    this.createMain();
    this.toggleShop();
    this.smallBanner();
    this.floorEle();
  }
  //创建main标签
  createMain() {
    var html = this.data.map((ele, index) => {
      var html2 = ele.rightminImg.map((item, index) => {
        return `
                <div class="spiritListPic">
                  <a href="#" target="_blank" title="52°汾酒集团贵宾窖藏（红）1500ml"><img
                      src="${item}" width="160"
                      height="160" alt="52°汾酒集团贵宾窖藏（红）1500ml">
                  </a>
                </div>
                `
      }).join(",");
      var html3 = ele.rightName.map((item, index) => {
        return `
                <div class="spiritListTit">
                  <a href="#" target="_blank" title="52°汾酒集团贵宾窖藏（红）1500ml">
                      ${item}
                  </a>
                </div>
                `
      }).join(",");
      var html4 = ele.price.map((item, index) => {
        return `
                <div class="spiritListPrice">
                  <strong goodid="93181" class="jxIndex_nowPrice_93181">${item}</strong><span><em
                      clubgoodid="93181"></em><i class="clubIcon"></i></span>
                </div>
                `
      }).join(",");


      var item4 = ele.price.map((item, index) => {
        for (var i = 0; i <= index; i++) {
          return `
                <li>
                    ${html2.split(",")[index]}
                    ${html3.split(",")[index]}
                    ${html4.split(",")[index]}
                </li>
                `
        }

      }).join("");

      var html5 = ele.bottomNameleft1.map((item, index) => {
        return `
                <a href="#" target="_blank"
                title="新品首发"><span>${item}</span></a>
                `
      }).join("");
      var html6 = ele.bottomNameleft2.map((item, index) => {
        return `
                <a href="#" target="_blank"
                title="茅台"><span>${item}</span></a>
                `
      }).join("");

      var html7 = ele.bottomRight.topTenNav.map((item, index) => {
        return `
                <a href="javascript:;" ${index==0?"on":""} on="1">${item}</a>
              <span>|</span>
                `
      }).join("");





      var html8 = ele.bottomRight.bottomNameright2.map((ele, index) => {
        return ele.map((item, index) => {
          return `
                <div class="topTenTit"><a href="#" target="_blank"
                    title="【买一送一】53°国台·品鉴15  500ml">${item}</a></div>
                `
        })
      }).join(",");

      var html9 = ele.bottomRight.bottomNameprice.map((ele, index) => {
        return ele.map((item, index) => {
          return `
                <div class="topTenPrice"><strong class="jxIndex_nowPrice_28877" goodid="28877">${item}</strong>
                </div>
                `
        })
      }).join(",");


      var html10 = ele.bottomRight.bottomImg.map((ele, index) => {
        return ele.map((item, index) => {
          return `
                  <div class="topTenPic"><a href="#" target="_blank"
                      title="【买一送一】53°国台·品鉴15  500ml"><img
                        src=${item} width="90"
                        height="90" alt="【买一送一】53°国台·品鉴15  500ml"></a>
                  </div>
                `
        })
      }).join(",");




      var item10 = ele.bottomRight.bottomImg.map((ele, index) => {
        return ele.map((item, index) => {
          for (var i = 0; i <= index; i++) {
            return `       
                <li product-box="28877"><i class="topTenOne"></i>
                    ${html10.split(",")[index]}
                    <div class="topTenTitBox">
                        ${html8.split(",")[index]}
                        ${html9.split(",")[index]}
                    </div>
                </li>
             
                `
          }
        }).join("")
      }).join(",");


      var item11 = ele.bottomRight.bottomImg.map((ele, index) => {
        for (var i = 0; i <= index; i++) {
          return `
        <ul class="clearfix" style="display:${index==0?"block":"none"}">
        ${item10.split(",")[index]}
        </ul>
        `
        }
      }).join("");

      return `
            <div class="shoppingBox main1 Lay_5 mt10 whiteWine news">
            <div class="titlebox">
            <div class="comTitle"><i class="comIcon1 newIndexIcon">${ele.topNameI}</i><span>${ele.topNameSpan}</span></div>
            <div class="rightMenu" name="__home_baireci">
              <a href="" target="_blank" title="贵州">贵州</a>
              |<a href="" target="_blank" title="四川">四川</a>
              |<a href="" target="_blank" title="山西">山西</a>
              |<a href="" target="_blank" title="北京">北京</a>
              |<a href="" target="_blank" title="江苏">江苏</a>
              |<a href="" target="_blank" title="山东">山东</a>
              |<a href="" target="_blank" title="安徽">安徽</a>
              <a name="home_bairukou" href="" target="_blank" class="goBlank" title="去白酒馆"
                rel="nofollow">${ele.topNameSpan}<span>&gt;</span></a></div>
          </div>


          <div class="spiritWrap">
          
          <div class="spiritList" name="__home_baidanpin">
          <ul class="clearfix news">
            ${item4}
          </ul>
        </div>
        </div>


        <div class="topTenWrap news">
        <div class="hotWordBox" name="__home_bairemen">
          <ul>
            <li>
              <h3><i></i><span>热门推荐</span></h3>
              <p>${html5}</p>
            </li>
            <li class="mt7">
              <h3><i></i><span>美酒品牌</span></h3>
              <p>${html6}</p>
            </li>
          </ul>
        </div>
        <div class="topTenBox" id="hotListTabID_1">
          <div class="topTenNavBox">
            <h3><i class="topTen1 newIndexIcon"></i><span>本周热销排行榜</span></h3>
            <div class="topTenNav">
              ${html7}
            </div>
          </div><!-- 白酒馆本周热销商品Start -->
          <div class="topTenConWrap" name="__home_baipaihang">
            <div class="topTenCon">  
                ${item11}
            </div>
          </div><!-- 白酒馆本周热销商品End -->
        </div>
      </div>
      </div>
            `

    }).join("")
    $(".mainBox").append(html);

    var navLi = this.data.map((ele, index) => {
      return `
      <li class="${index==0?"navLiftActive":""}">${index+1}</li>`
    }).join("")
    navLi += `<li class="floor"><i></i></li>`;
    $(".navLift").append(navLi);
  }
  //点击切换热销商品
  toggleShop() {
    $(".topTenNav a").click(function () {
      $(this).parent().parent().siblings(".topTenConWrap").find("ul").eq($(this).index()).toggle();
    })
  }

  //内容区小banner
  smallBanner() {
    let data = this.data.map((ele, index) => {
      return ele.leftbigImg;
    })
    for (let i = 0; i < data.length; i++) {
      let p2 = new PlayBannerMain(data[i]);
      p2.init();
    }
    //循环删除插入页面尾部的标签，再复制删除
    for (let i = 0; i < $(".bannerBoxmin").length; i++) {
      $(".bannerBoxmin").eq(i).appendTo($(".spiritWrap").eq(i));
    }
    $(".delBox").remove();
  }
  //楼层电梯
  floorEle() {
    $(() => {
      //获取楼层盒子距离窗口顶部距离
      let mainTop = $("a[name='home_you10']").offset().top;
      //监听页面滚动 
      $(window).scroll(function () {
        // console.log($(document).scrollTop());
        //判断滚动条距离大于或等于楼层距离时显示导航条
        if ($(document).scrollTop() >= mainTop) {
          $(".navLift").fadeIn()
        } else {
          $(".navLift").fadeOut();
        }
        //滚动到对应楼层让左侧电梯显示楼层号
        //循环楼层获取对应top值
        $(".shoppingBox").each(function (index, ele) {
          //判断垂直滚动条距离大于等于楼层top值时让左侧电梯盒子更换背景色显示楼层号 
          // console.log($(ele).height()/2);
          //获取当前元素高度一半加上top的值，精确定位
          let height = $(ele).offset().top - $(ele).height() / 1.5;
          if ($(document).scrollTop() >= height) {
            $(ele).siblings(".navLift").children("li").eq(index).addClass("navLiftActive").siblings().removeClass("navLiftActive");
          }
        })
      })

      //点击跳转对应楼层
      $(".navLift li").click(function () {
        // console.log($(this).index());
        // console.log($(".shoppingBox").eq($(this).index()).offset().top);
        //点击判断li是否为返回顶部   
        if ($(this).index()  == $(".navLift li").length - 1) {
          //设置滚动条位置
          $("body,html").stop().animate({
            scrollTop: 0
            //scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
          })
        } else {
          //获取点击对应楼层的top值
          let boxTop = $(".shoppingBox").eq($(this).index()).offset().top - $(".shoppingBox").height() / 4;
          //设置滚动条位置
          $("body,html").stop().animate({
            scrollTop: boxTop
            //scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
          })
          //点击更换楼层背景色
          $(this).addClass("navLiftActive").siblings().removeClass("navLiftActive");
        }

      })
    })
  }
}

$.ajax({
  type: "get",
  url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/main.php",
  data: "data",
  dataType: "json",
  success: function (response) {
    var p1 = new MainBox(response);
    p1.init();
  }
});