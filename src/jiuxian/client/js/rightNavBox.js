$(() => {
    $(".navBoxCon div").hover(function () {
        $(this).addClass("navBoxCon-bg").siblings().removeClass("navBoxCon-bg");
        $(this).css({
            color: "#fff"
        }).siblings().css({
            color: "#333"
        })
    })
    $(".navBoxCon div").click(function () {
        console.log($(this).parent().parent().siblings(".gwc-info"));

        $(this).parent().parent().siblings(".gwc-info").toggle();
    })
})