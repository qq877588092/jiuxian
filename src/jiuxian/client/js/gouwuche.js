$(() => { 
    //全选
    $(".quanxuan").click(function () {
        $(".zixuan,.quanxuan").prop("checked", $(this).prop("checked"))
        total();
    });
    //子选
    $(".zixuan").click(function () {
        console.log("--------");
        
        if ($(".zixuan:checked").length == $(".zixuan").length) {
            console.log("=========");
            $(".quanxuan").prop("checked", true)
        } else {
            console.log("+++++++++++++");
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