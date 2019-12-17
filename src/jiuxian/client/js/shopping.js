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
    
                  <a href="">加入购物车</a>
                  <i></i>
                </div>
              </div>
            </div>
          </li>
          `
        })
        $(".productShow ul").html(html);
    }

}

function getMysql(index) {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/getMysql.php",
        data: "page=" + index,
        dataType: "json",
        success: function (response) {
            console.log(response);
            
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