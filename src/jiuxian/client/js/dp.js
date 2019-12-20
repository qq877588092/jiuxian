$(() => {
    let str = decodeURI(window.location.search); //接收url字符串
    let arr = str.slice(1).split("&"); //切割成数组
    let obj = {}; //创建空对象接收数组转换成对象
    arr.forEach(function (ele, index) {
        let data = ele.split("=");
        let key = data[0];
        let val = data[1];
        obj[key] = val;
    })
    // console.log(obj);
    // {
    //     src: "http://img09.jiuxian.com/2016/0618/897d0bae80364919828e2d8ded474c494.jpg",
    //     name: "【老酒特卖】53°茅台飞天500ml（2014年）",
    //     price: "￥3200"
    // }
    $(".dpBinImg img")[0].src = obj.src;
    $(".comName h1").text(obj.name);
    $(".pri strong").text(obj.price);
})