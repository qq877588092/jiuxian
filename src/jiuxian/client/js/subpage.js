class Subpage {
    constructor(data) {
        this.data = data;
    }
    //接口
    init() {
        this.renderUI();
    }
    //渲染
    renderUI() {
        this.createBox();
        this.createMenu();
        this.createEvent();
        this.showBox();
    }
    //创建标签
    createBox() {
        var htmlLi = this.data.map((ele, index) => {
            var html2 = ele.leftName2.map((item, index) => {
                return ` <a href="">${item}</a>`
            }).join("");
            return `
            <li>
                <h3 class="sortCon"><i></i><a href="">${ele.leftName1}</a></h3>
                <p>
                   ${html2}
                </p>
            </li> 
            `
        }).join("")
        $(".sortBox").append(htmlLi);
    }
    createMenu() {
        var html = this.data.map((ele, index) => {
            var html3 = ele.rightName2.map((item, index) => {
                return `<p class="clearfix"><a href="#">${item}</a><s>|</s></p>`
            }).join("");
            return `
            <div class="menuBox" style="display: none;">
        <div class="menuCon" >
            <div class="menuItemTitle">
              <h4>${ele.rightName1}</h4>
            </div>
            <div class="menuCon-list"> 
                ${html3}
            </div>
          </div>
          <div class="menuFoc">
            <a href="#"><img title="" alt="" src=${ele.src}>
            </a>
          </div>
          </div>
            `
        }).join("")
        $(".shoppingSort").append(html);
    }
    //鼠标移入显示侧边栏
    createEvent() {
        $(".shoppingSort").mouseenter(function () {
            $(this).children(".sortBox").show();
        });
        $(".sortBox li").hover(function () {
            $(this).addClass("liarticlebg").siblings().removeClass("liarticlebg");
            $(this).addClass("borderLi").siblings().removeClass("borderLi");
            $(this).parent().siblings(".menuBox").eq($(this).index()).show().siblings(".menuBox").hide();
        })
        $(".shoppingSort").mouseleave(function () {
            $(this).children(".sortBox").hide();
            $(".menuBox").hide();
            $(".sortBox li").removeClass("liarticlebg");
            $(".sortBox li").removeClass("borderLi");
        })

    }
    //商品边框显示隐藏
    showBox() {
        $(".productShow li").hover(function () {
            $(this).children(".showBox1").toggle();
        })
    }
    //商品详情跳转
        /* 002-给标签添加点击事件，当点击标签的时候打开详情页 */

        // for (var i = 0, len = oLis.length; i < len; i++) {
        //     var oLi = oLis[i];
        //     oLi.index = i; /* 把i保存到标签的身上 */
        //     oLi.onclick = function () {
        //         // console.log(this.index);
        //         /* 003-点击标签的时候先拿到当前标签对应的数据 */
        //         // var src = this.getElementsByTagName("img")[0].src;
        //         // var name = this.getElementsByClassName("name")[0].innerText;
        //         // var price = this.getElementsByClassName("price")[0].innerText;

        //         var o = data[this.index];

        //         /* 004-把对应的数据转换成查询字符串拼接在URL后面 */
        //         var queryString = `src=${o.src}&name=${o.name}&price=${o.price}`;
        //         // window.location.href = "./03-detail.html?name=zs&age=18";
        //         window.location.href = "http://127.0.0.1/code/jiuxian/src/jiuxian/client/dp.html?" + queryString;
        //     }
        // }

}

$.ajax({
    type: "get",
    url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/subpage.php",
    data: "data",
    dataType: "json",
    success: function (response) {
        var p1 = new Subpage(response);
        p1.init();
        
    }
});