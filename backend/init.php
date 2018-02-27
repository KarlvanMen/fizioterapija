<?php

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// MAIN OUTPUT WRAPPER
function pj($message) {
    // header("Access-Control-Allow-Headers: Content-type");
    // header("Access-Control-Allow-Origin: *");
    // // header("Access-Control-Allow-Credentials: true");
    // header("Content-Type: application/json");
    // header("Cache-Control: no-cache, must-revalidate");
    print json_encode($message, JSON_PRETTY_PRINT);
    exit;
}

if (file_exists('config.php')) {
    require('config.php');
}else{
    pj(['error' => "No configuration"]);
}

if (file_exists('core/init.php')) {
    require_once('core/init.php');
}else{
    pj(['error' => "No core init file"]);
}

if (file_exists('repository.php')) {
    require_once('repository.php');
}else{
    pj(['error' => "No repository file"]);
}

if (file_exists('functions.php')) {
    require_once('functions.php');
}else{
    pj(['error' => "No functions file"]);
}

$dsn = "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=".DB_CHARSET;
try{
    $pdo = new PDO($dsn, DB_USER, DB_PASSWORD);
}catch(PDOException $e) {
    pj(['error' => "DB connection error: " .  $e->getMessage()]);
}

if (file_exists('admin/functions.php')) {
    require('admin/functions.php');
}
