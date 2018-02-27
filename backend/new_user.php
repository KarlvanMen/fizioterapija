<?php

if (file_exists('init.php')) {
    require('init.php');
}else{
    echo '{"error":"No init file"}';
}

$user = createUser([
    "login" => 'fizioaz',
    'password' => 'pass',
    'status' => 'active'
]);

echo $user;