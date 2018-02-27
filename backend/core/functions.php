<?php

function getGet($param)
{
    $res = null;
    if (isset($_GET[$param])) {
        $res = $_GET[$param];
    }

    return $res;
}

function getPost($param)
{
    $res = null;
    if (isset($_POST[$param])) {
        $res = $_POST[$param];
    }

    return $res;
}

function checkParams($data, $keys)
{
    foreach ($data as $key => $value) {
        if (!in_array($key, $keys)) {
            pj(['error' => 'not supported key', 'key' => $key]);
        }
    }
}

function checkRequiredParams($data, $keys)
{
    foreach ($keys as $key) {
        if (!array_key_exists($key, $data)) {
            pj(['error' => 'empty value not supported', 'key' => $key]);
        }
    }
}