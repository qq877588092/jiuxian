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
      return `
            <li>
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
                  <a href="">${ele.spanName}</a>
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
                <div class="shopControlRight">
                  <a href="#">加入购物车</a>
                  <i></i>
                </div>
              </div>
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

function getMysql(index) {
  $.ajax({
    type: "get",
    url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/getMysql.php",
    data: "page=" + index,
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

/* 实现点击添加商品到购物车的功能 */
$(".shopControlRight").click(function () {
  console.log("++++++++");
  
  /* 检查是否已经登录 ，如果没有登录那就跳转到登录页面*/
  if (!localStorage.phone) {
    window.location.href = "http://127.0.0.1/code/jiuxian/src/jiuxian/client/login.html";
  }

  /* 获取当前商品的ID */
  // let good_id = $(this).parents("li").data().id;
  // /* 发送网络请求把当前数据添加到购物车表中 */
  // /* 数据库表 cart_id  good_id  num isChecked */
  // /* 添加数据： */
  // /* 删除数据： */
  // /* 更新数据： */
  // $.ajax({
  //   url: "../server/cart.php",
  //   data: {
  //     type: "add",
  //     good_id: good_id,
  //     id: localStorage.id
  //   },
  //   dataType: "json",
  //   success: function (response) {
  //     if (response.status == "success") {
  //       $(".cart_total").text($(".cart_total").text() * 1 + 1);
  //     }
  //   }
  // });
})