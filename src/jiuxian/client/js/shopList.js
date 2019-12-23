$(() => {
    new Promise(function(resolve, reject) {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/code/jiuxian/src/jiuxian/server/getTotalCount.php",
            dataType: "json",
            success: (data) => {
                let res = "";
                for (let i = 0; i < data.count; i++) {
                    res += `<a href="javascript:;">${i + 1}</a>`
                }
                $("#page").html(res);
                $("#page").children().eq(0).addClass("active");

                resolve();
            }
        });
    }).then(function() {
        getDataWithPage(1, 0);
    })


    /* type ==0 默认排序  id */
    /* type ==1 升序排列  价格 */
    /* type ==2 降序排列  价格 */

    // function renderUI(data) {
    //     console.log(data);

    //     let html = data.map((ele) => {
    //         return `
    //             <li class="item">
    //                 <div class="item-box">
    //                     <img src=${ele.src}>
    //                     <div class="price ">￥ ${ele.price}</div>
    //                     <div class="title ">${ele.title.substr(0,15)}</div>
    //                     <div class="dis ">${ele.disCount}</div>
    //                     <div class="storeName ">${ele.shopName}</div>
    //                 </div>
    //             </li>
    //         `
    //     }).join("");
    //     $(".box-list").html(html);
    // }


    /* 处理排序 */
    $(".typeBtn").click(function() {
        getDataWithPage(1, $(this).index());
    })
})