<?php
    $data=file_get_contents("sidebar.json");
    #json->php
    $data=json_decode($data,true);

    $json=json_encode($data,true);
    echo $json;
?>