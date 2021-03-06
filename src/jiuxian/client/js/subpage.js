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



