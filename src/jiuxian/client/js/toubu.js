$(() => {
    $(".wodejiuxian").mouseenter(function (e) {
        $(this).children(".userinfo").stop().show();
    });
    $(".wodejiuxian").mouseleave(function (e) {
        $(this).children(".userinfo").stop().hide();
    });
    $(".kuhufuwu").mouseenter(function (e) {
        $(this).children(".userServe").stop().show();
    });
    $(".kuhufuwu").mouseleave(function (e) {
        $(this).children(".userServe").stop().hide();
    });
})