<?php

function isAuth() {
    if (isset($_SESSION['is_auth'])) {
        return $_SESSION['is_auth'];
    }

    return false;
}

function auth($login, $passwors) {
    if ($id = loginDB($login, $passwors)) {
        $user = fetchOneBy('user', ['id' => $id]);
        $_SESSION['is_auth'] = true;
        $_SESSION['login'] = $login;
        $_SESSION['id'] = $id;

        return true;
    } else {
        $_SESSION['is_auth'] = false;

        return false;
    }
}

function getLogin() {
    if (isAuth()) {
        return $_SESSION['login'];
    }
}

function getLanguage() {
    if (isAuth()) {
        return $_SESSION['language'];
    }
}

function getId() {
    if (isAuth()) {
        return $_SESSION['id'];
    }
}

function out() {
    $_SESSION = [];
    session_destroy();
}