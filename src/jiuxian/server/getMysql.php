<?php
# 01-先连接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "jiuxianwang");

# 获取参数
$page = ($_REQUEST["page"] -1 ) * 30;
$type = $_REQUEST["sortType"];
$i=$_REQUEST["i"];
# 02-查询获取数据库所有的数据
if($type == 0)
{
  $sql = "SELECT * FROM goods LIMIT $page, 30";
}// elseif($type == 1){
//   $sql = "SELECT * FROM goods ORDER BY price DESC LIMIT $page, 30";
// }else{
//   $sql = "SELECT * FROM goods ORDER BY price ASC LIMIT $page, 30";
// }
elseif($type == 1 && $i==1){
    $sql = "SELECT * 
  FROM  `goods` 
  ORDER BY  `goods`.`judge` ASC 
  LIMIT 0 , 30";
}elseif($type == 1 && $i==2){
    $sql = "SELECT * 
    FROM  `goods` 
    ORDER BY  `goods`.`judge` DESC 
    LIMIT 0 , 30"; 
}elseif($type == 2){
  $sql = "SELECT * FROM goods ORDER BY price DESC LIMIT $page, 30";
}

$result = mysqli_query($db,$sql);
# 03-把数据库中的获取所有数据转换为JSON返回
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);

?>




