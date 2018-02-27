<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
session_start();

if (file_exists('init.php')) {
    require('init.php');
}else{
    echo '{"error":"No init file"}';
}

if (file_exists('route.php')) {
    require('route.php');
}else{
    echo '{"error":"No route file"}';
}


pj(['error' => "Sth wrong" ]);
