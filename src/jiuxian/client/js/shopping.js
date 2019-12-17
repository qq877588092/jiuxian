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


$.ajax({
    type: "get",
    url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/getMysql.php",
    dataType: "json",
    success: function (response) {
        let p1 = new Shopping(response);
        p1.init();
    }
});