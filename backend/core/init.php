<?php

if (file_exists('core/functions.php')) {
    require_once('core/functions.php');
}else{
    pj(['error' => "No core functions file"]);
}

if (file_exists('core/errors.php')) {
    require_once('core/errors.php');
}else{
    pj(['error' => "No core errors file"]);
}

if (file_exists('core/db.php')) {
    require_once('core/db.php');
}else{
    pj(['error' => "No core db file"]);
}

if (file_exists('core/auth.php')) {
    require_once('core/auth.php');
}else{
    pj(['error' => "No core auth file"]);
}
