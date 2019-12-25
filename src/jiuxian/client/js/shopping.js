class Shopping {
  constructor(data) {
    this.data = data;
  }
  //接口
  init() {
    this.renderUI();
  }
  //渲染
  renderUI() {
    this.createShop();
    this.dpBox();
  }
  createShop() {
    let html = this.data.map((ele) => {
      // console.log(ele);
      //获取id
      return `
            <li data-id="${ele.good_id}">
            <div class="showBox1" style="display: none;">
            </div>
            <div class="showBox2">
              <div>
                <img src=${ele.src} alt="">
              </div>
              <div>
                <h3>￥${ele.price}</h3>
              </div>
              <div>
                <h6>
                  <a href="">${ele.title}</a>
                </h6>
              </div>
              <div>
                <p>
                  <a href="">${ele.judge}评价</a>
                </p>
              </div>
              <div>
              <h5>
                <a href="">${ele.shopProId}</a>
              </h5>
            </div>
              <div class="jiajian">
                <i></i>
                <span>限时抢购</span>
              </div>
              <div class="shopControl">
                <div class="shopControlLeft">
                  <a href="#">-</a>
                  <input type="text" value="1">
                  <a href="#">+</a>
                </div>

              </div>

            </div>
            <div class="shopControlRight">
            <a href="javascript:;">加入购物车</a>
            <i></i>
          </div>
          </li>
          `
    })
    $(".productShow ul").html(html);
  }
  dpBox() {
    $(".showBox2").click(function () {
      let src = $(this).children("div").children("img")[0].src;
      let name = $(this).children("div").children("h6")[0].innerText;
      let price = $(this).children("div").children("h3")[0].innerText;

      let queryString = `src=${src}&name=${name}&price=${price}`;
      console.log(queryString);
      window.location.href = "http://127.0.0.1/code/jiuxian/src/jiuxian/client/dp.html?" + queryString;
    })
  }


}

function getMysql(page, type, i) {
  $.ajax({
    type: "get",
    url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/getMysql.php",
    data: `page=${page}&sortType=${type}&i=${i}`,
    dataType: "json",
    success: function (response) {
      let p1 = new Shopping(response);
      p1.init();
    }
  });
}

//页面刷新获取第一页数据
getMysql(1);

//后台获取页码生成标签
$.ajax({
  type: "get",
  url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/getPage.php",
  dataType: "json",
  success: function (response) {
    let count = response.count;
    let html1 = "";
    for (i = 0; i < count; i++) {
      html1 +=
        `<a class="number ${i==0?"on":""}">${i+1}</a>`
    }
    let html2 =
      `
        <a href="javascript:void(0)" class="prevpage">上一页
          </a>
          ${html1}
          <span class="sheng" href="">...</span>
          <a href="#" class="nextpage">下一页</a>
          <span class="totalPage">共<em>${count}</em>页</span>
        `
    $(".fanye").append(html2);
    $(".fanye .number").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
      //发请求获取数据
      getMysql($(this).index());
    })
  }

});

$(() => {
  /* 处理排序 */
  var k = 1;
  //定义一个变量点击1次排高，第二次排低
  $(".tab").click(function () {
    if (k == 1) {
      console.log($(this).index());
      getMysql(1, $(this).index(), k);
      k = 2;
    } else {
      console.log($(this).index());
      getMysql(1, $(this).index(), k);
      k = 1;
    }
    $(this).addClass("bgColor").siblings().removeClass("bgColor");
    console.log($(this).children("a").children("i"));
    
    $(this).children("a").children("i").toggleClass("xlbgImg");
  })
})



/* 实现点击添加商品到购物车的功能 */
$(() => {
  let showText = localStorage.phone ? localStorage.phone + ",欢迎你！" : "请登录";
  $(".topheadderLeft p").text(showText);
  if (localStorage.phone) {
    $(".topheadderLeft a").text("注销");
  } else {
    $(".topheadderLeft a").text("登录");
  }

  $(".topheadderLeft a").click(function () {
    if ($(this).text() == "注销") {
      localStorage.removeItem("phone");
      localStorage.removeItem("id");
      window.location.href = "http://127.0.0.1/code/jiuxian/src/jiuxian/client/gwc.html";
    } else {
      window.location.href = "http://127.0.0.1/code/jiuxian/src/jiuxian/client/login.html";
    }
  })
  $(".productShow ul").on("click","a",function () {
    /* 检查是否已经登录 ，如果没有登录那就跳转到登录页面*/
    if (!localStorage.phone) {
      window.location.href = "http://127.0.0.1/code/jiuxian/src/jiuxian/client/login.html";
    }
    /* 获取当前商品的ID */
    let good_id = $(this).parent().parent().data().id;
    console.log($(this).parent().parent().data().id);

    /* 发送网络请求把当前数据添加到购物车表中 */
    /* 数据库表 cart_id  good_id  num isChecked */
    /* 添加数据： */
    /* 删除数据： */
    /* 更新数据： */
    $.ajax({
      url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/cart.php",
      data: {
        type: "add",
        good_id: good_id,
        id: localStorage.id
      },
      dataType: "json",
      success: function (response) {
        console.log(response);
        if (response.status == "success") {
          // $(".cart_total").text($(".cart_total").text() * 1 + 1);
        }
      }
    });
  })
})