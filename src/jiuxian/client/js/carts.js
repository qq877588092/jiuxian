$(() => {
  let showText = localStorage.phone ? localStorage.phone + ",欢迎你！" : "请登录";
  $(".loginNow").text(showText);


  if (localStorage.phone) {
    $(".regNow").text("注销");
  } else {
    $(".regNow").text("登录");
  }

  $(".regNow").click(function () {
    if ($(this).text() == "注销") {
      localStorage.removeItem("phone");
      localStorage.removeItem("id");
      window.location.href = "http://127.0.0.1/code/jiuxian/src/jiuxian/client/gwc.html";
    } else {
      window.location.href = "http://127.0.0.1/code/jiuxian/src/jiuxian/client/login.html";
    }
  })

  loadCart();



  // $.ajax({
  //     url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/cart.php",
  //     data: {id:localStorage.id,type: "get"},
  //     dataType: "dataType",
  //     success: function (response) {
  //         console.log(response);

  //     }
  // });




  function loadCart() {
    // $(".cartBox").remove();
    $.ajax({ //获取商品数据
      data: {
        type: "get",
        id: localStorage.id
      },
      url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/cart.php",
      dataType: "json",
      success: function (res) {
        // console.log(res);
        $(res.data[0]).each((index, ele) => {
          // console.log(ele);  
          renderUI(ele);
          gwc();
        })
      }
    });
  }

  /* 渲染购物车 */
  function renderUI(data) {
    // console.log(data.goods);
    let html = data.goods.map(item => {
      return `
            <div class="cart-tbody">
            <div class="gwclist">
              <div class="gwclist-shop">
                <div class="news">
                  <div class="dx checkbox">
                    <label for=""> <input class="zixuan" type="checkbox"></label>
                  </div>
                  <div class="dx shop_info">
                    <div class="shop_img">
                      <a href="">
                        <img src=${item.src} width="80"
                          height="80">
                      </a>
                      <div class="shop_name">
                        <a href="" target="_blank">
                        ${item.title}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="dx shop_price">
                    <h6 class="pic">￥${item.price}</h6>
                  </div>
                  <div class="dx shop_jb">
                    <h6>114金币</h6>
                  </div>
                  <div class="dx shop_add">
                    <input type="button" value="-" class="jian">
                     <input name="num" type="text" value="1" class="val">
                      <input
                      type="button" value="+" class="jia">
                  </div>
                  <div class="dx shop_xj">
                    <h6  class="price">￥${item.price}</h6>
                  </div>
                  <div class="dx shop_del">
                    <h6>删除</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `
    }).join('');
    $(".cart-t").append(html);
  }


  // $("body").on("click", "#all", function () {
  //     // $(this).next("label").toggleClass("mark");
  //     /* 设置页面中所有的复选框都选中 */
  //     $("body").find("input[type=checkbox]").next("label").toggleClass("mark");
  //     totalMoney();
  // })

  // $("body").on("click", ".plus,.reduce", function () {
  //     /* 更改数量|发送网络请求 */
  //     let count;
  //     if (this.className == "plus") {
  //         count = $(this).prev().val() * 1 + 1;
  //         $(this).prev().val(count);
  //     } else {
  //         count = $(this).next().val() * 1 - 1;
  //         $(this).next().val(count);
  //     }

  //     let price = $(this).parents(".order_item").find(".sum_price").data().price;
  //     $(this).parents(".order_item").find(".sum_price").text("￥" + price * count);

  //     let gid = $(this).parents(".order_item").attr("gid");
  //     updateCartData(this.className, gid, localStorage.id);
  //     totalMoney();
  // });

  // function updateCartData(flag, good_id, id) {
  //     $.ajax({
  //         url: "../server/cart.php",
  //         data: {
  //             type: "update",
  //             flag,
  //             id,
  //             good_id
  //         }
  //     });
  // }

  // /* 删除功能 */
  // $("body").on("click", ".delBtn", function () {
  //     let good_id = $(this).parents(".order_item").attr("gid");
  //     $.ajax({
  //         url: "../server/cart.php",
  //         data: { type: "del", good_id, id: localStorage.id },
  //         dataType: "json",
  //         success: function (response) {
  //             console.log(response);
  //             loadCart();
  //         }
  //     });
  // })


  // function totalMoney() {
  //     console.log("计算总价");

  //     let total_count = 0;
  //     let total_price = 0;

  //     $(".order_item").each((index, ele) => {
  //         // console.log($(ele).find("input[type='checkbox']").next().hasClass("mark"));
  //         if ($(ele).find("input[type='checkbox']").next().hasClass("mark")) {
  //             let count = $(ele).find(".sum").val() * 1;
  //             let price = $(ele).find(".sum_price").text().substr(1) * 1;

  //             total_count += count;
  //             total_price += count * price;
  //         }

  //     });

  //     $(".piece_num").text(total_count);
  //     $(".total_text").text("￥" + total_price.toFixed(2));
})

//购物车功能
function gwc() {
  $(() => {
    //全选
    $(".quanxuan").click(function () {
      console.log("====");

      $(".zixuan,.quanxuan").prop("checked", $(this).prop("checked"))
      total();
    });
    //子选
    console.log($(".zixuan"));

    $(".zixuan").click(function () {
      console.log("=========");
      if ($(".zixuan:checked").length == $(".zixuan").length) {
        $(".quanxuan").prop("checked", true)
      } else {
        $(".quanxuan").prop("checked", false)
      }
      total();
    })
    //+选
    $(".jia").click(function () {
      let vals = $(this).siblings(".val").val();
      vals++;
      $(this).siblings(".val").val(vals);
      price($(this), vals);
      total();
    })
    //-选
    $(".jian").click(function () {
      let vals = $(this).siblings(".val").val();
      if (vals == 1) {
        return false;
      }
      vals--;
      $(this).siblings(".val").val(vals);
      price($(this), vals);
      total();

    })
    //输入计量
    $(".val").keyup(function () {
      let sum = $(this).val();
      price($(this), sum);
      total();
    })
    //+-选功能块
    function price(item, val) {
      let s = item.parent().siblings(".shop_price").children(".pic").text().substr(1);
      s = "¥" + (s * val).toFixed(2);
      item.parent().siblings(".shop_xj").children(".price").text(s);
    }
    //总价功能块
    function total() {
      let sum = 0;
      $(".zixuan:checked").parent().parent().siblings(".shop_xj").children(".price").each(function (i, ele) {
        sum += Number($(ele).text().substr(1));
      })
      $(".total>em").text("¥" + sum.toFixed(2));
    }
    //删除块
    $(".del").click(function () {
      $(this).parent().remove();
      total();
    })
  })
}