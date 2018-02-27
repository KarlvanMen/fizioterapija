<?php

if (file_exists('init.php')) {
    require('init.php');
}else{
    echo '{"error":"No init file"}';
}

$sql=sprintf('TRUNCATE `%1$scourse`; TRUNCATE `%1$smaterial`; TRUNCATE `%1$ssubject`; TRUNCATE `%1$suser`; TRUNCATE `%1$suser_material`; ' ,$table_prefix);
$stm = $pdo->prepare($sql);
$stm->execute();

$admin = createUser([
    'login' => 'admin',
    'password' => 'q',
    'country' => 'LV',
    'language' => 'LV',
    'name' => 'Kristaps Porzingis',
    'role' => 'admin'
]);

$user = createUser([
    'login' => 'qwe',
    'password' => 'q',
    'country' => 'US',
    'language' => 'US',
    'name' => 'Donald Trump',
    'role' => 'student'
]);
$user2 = createUser([
    'login' => 'qwe2',
    'password' => 'q',
    'country' => 'US',
    'language' => 'US',
    'name' => 'Donald Trumpp',
    'role' => 'student'
]);
deleteUser($user2);

$user3 = createUser([
    'login' => 'user',
    'password' => 'pass',
    'country' => 'LV',
    'language' => 'LV',
    'name' => 'Lielais Kristaps',
    'role' => 'admin'
]);
updateUser([
    'id' => $user,
    'login' => 'qwe',
    'name' => 'Donald Trump'
]);

$sub1 = createSubject([
    'alias' => 'sub1',
    'country' => 'US',
    'language' => 'US',
    'name' => 'Sub 1'
]);
$sub2 = createSubject([
    'alias' => 'sub1',
    'country' => 'LV',
    'language' => 'LV',
    'name' => 'Sub 1'
]);
$sub3 = createSubject([
    'alias' => 'sub3',
    'country' => 'US',
    'language' => 'US',
    'name' => 'Sub 3'
]);
$sub4 = createSubject([
    'alias' => 'sub3',
    'country' => 'LV',
    'language' => 'LV',
    'name' => 'Sub 3'
]);
deleteSubject('sub3');
$cou1 = createCourse([
    'alias' => 'course1',
    'subject_alias' => 'sub1',
    'country' => 'US',
    'language' => 'US',
    'name' => 'Course 1'
]);
$cou2 = createCourse([
    'alias' => 'course1',
    'subject_alias' => 'sub1',
    'country' => 'LV',
    'language' => 'LV',
    'name' => 'Course 1'
]);
$cou3 = createCourse([
    'alias' => 'course2',
    'subject_alias' => 'sub1',
    'country' => 'LV',
    'language' => 'LV',
    'name' => 'Course 2'
]);
$cou4 = createCourse([
    'alias' => 'course4',
    'subject_alias' => 'sub2',
    'country' => 'LV',
    'language' => 'LV',
    'name' => 'Course 4'
]);
deleteCourse('course4');
$mat1 = createMaterial([
    'alias' => 'mat1',
    'course_alias' => 'course1',
    'country' => 'US',
    'language' => 'US',
    'name' => 'Material 1'
]);
$mat2 = createMaterial([
    'alias' => 'mat1',
    'course_alias' => 'course1',
    'country' => 'LV',
    'language' => 'LV',
    'name' => 'Material 1'
]);
$mat3 = createMaterial([
    'alias' => 'mat2',
    'course_alias' => 'course1',
    'country' => 'US',
    'language' => 'US',
    'name' => 'Material 2'
]);
$mat4 = createMaterial([
    'alias' => 'mat4',
    'course_alias' => 'course1',
    'country' => 'LT',
    'language' => 'LT',
    'name' => 'Material 4'
]);
deleteMaterial('mat4');