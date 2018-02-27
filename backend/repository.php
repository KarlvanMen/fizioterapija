<?php

function loginDB($login, $password)
{
	
	global $pdo, $table_prefix;
	
	
	$sql=sprintf("SELECT * FROM %suser WHERE login=:login AND password=:password AND status=:status", $table_prefix);
	
	$stm = $pdo->prepare($sql);
	
	$stm->execute([
	'login' => $login,
	'password' => md5($password),
	'status' => 'active'
	]);
	
	
	if ($result = $stm->fetch()) {
		
		return $result['id'];
		
	}
	
	
	return false;
	
}


function getUserRepo($id)
{
	
	fetchBy('user', ['id' => $id]);
	
}


function getHomeData() 
{
	
	$pageInfo = fetchBy('home', ['id' => 1]);
	
	$data = [
	'pageInfo' => $pageInfo
	];
	
	return $data;
	
}

function getFizioData() 
{
	
	$pageInfo = fetchBy('fizioterapija', ['id' => 1]);
	
	$pageText = fetchAll('fizioterapija_text');
	
	$data = [
	'pageInfo' => $pageInfo,
	'text' => $pageText
	];
	
	return $data;
	
}

function getVingroData() 
{
	
	$pageInfo = fetchBy('vingrosana', ['id' => 1]);
	
	$pageText = fetchAll('vingrosana_text');
	
	$data = [
	'pageInfo' => $pageInfo,
	'text' => $pageText
	];
	
	return $data;
	
}

function getKalendarsData() 
{
	
	$pageInfo = fetchBy('kalendars', ['id' => 1]);
	
	$pageText = fetchAll('kalendars_text');
	
	foreach($pageText as $key => $val) {
		
		$pageText[$key]['active'] = 0;
		
	}
	
	$data = [
	'pageInfo' => $pageInfo,
	'trainings' => $pageText
	];
	
	return $data;
	
}

function getParMumsData() 
{
	
	$pageInfo = fetchBy('about', ['id' => 1]);
	
	$pageText = fetchAll('about_text');
	
	$data = [
	'pageInfo' => $pageInfo,
	'text' => $pageText
	];
	
	return $data;
	
}

function getGalerijasData() 
{
	
	$pageInfo = fetchBy('galleries', ['id' => 1]);
	
	$pageText = fetchAll('galleries_text');
	
	foreach($pageText as $key => $val) {
		
		$pageText[$key]['images'] = fetchBy('galleries_images', ['corr_id' => $pageText[$key]['id']]);
		
	}
	
	$data = [
	'pageInfo' => $pageInfo,
	'text' => $pageText
	];
	
	return $data;
	
}

function getKontaktiData() 
{
	
	$pageInfo = fetchBy('kontakti', ['id' => 1]);
	
	$pageText = fetchAll('kontakti_text');
	
	$data = [
	'pageInfo' => $pageInfo,
	'text' => $pageText
	];
	
	return $data;
	
}

function updateHome ($val)
{
	
	$options=[
	'id' => 1,
	'quote' => $val
	];
	
	return update('home', $options);
	
}

function updateFizio ($val2)
{
	
	$options=[
	'id' => 1,
	'quote' => $val2
	];
	
	return update('fizioterapija', $options);
	
}

function updateVingr ($val2)
{
	
	$options=[
	'id' => 1,
	'pageLinkTitle' => $val2,
	];
	
	return update('vingrosana', $options);
	
}

function updateKont ($val2, $val3, $val4)
{
	
	$options=[
	'id' => 1,
	'siaTitle' => $val2,
	'siaEmail' => $val3,
	'siaPhone' => $val4,
	];
	
	return update('kontakti', $options);
	
}

function updateAbout ($val2)
{
	
	$options=[
	'id' => 1,
	'quote' => $val2
	];
	
	return update('about', $options);
	
}

function updateVideo ($title, $image, $id)
{
	
	$options=[
		'id' => $id,
		'title' => $title,
	];
	if (strcmp($image, '') !== 0) {
		$options['image'] = $image;
	}
	
	return update('galleries_text', $options);
	
}


function uploadImage ()
{	
    $target_dir = "uploads/";
	$target_file = $target_dir . basename($_FILES["image"]["name"]);
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
	// 	Check if image file is a actual image or fake image
		
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if($check == false) {
        return 1;
    }		
    // 	Check if file already exists
    $i = 0;
	while (file_exists($target_file)) {
		$target_file = $target_dir . basename($_FILES["image"]["name"], '.' . $imageFileType) . $i . '.' . $imageFileType;
		$i++;
	}
	// 	Check file size
	if ($_FILES["image"]["size"] > 2000000) {	
		return 2;
	}
	// 	Allow certain file formats
	if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" && $imageFileType != "svg" ) {	
		return 3;
	}
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {	
        return "http://fizioaz.lv/backend/".$target_file;
    }
    else {
        return 4;
    }	
}

function newFizioterapija ($var1,$var2,$var3,$var4,$var5)
{
    $data = [
        "title" => $var1,
        'image' => $var2,
        'textTitle' => $var3,
        'textText' => $var4,
        'textPrice' => $var5
    ];
    return save('fizioterapija_text', $data);
}

function delFizioterapija ($var1)
{
    return delete('fizioterapija_text', $var1);
}

function newVingrosana ($var1,$var2,$var3,$var4,$var5)
{
    $data = [
        "title" => $var1,
        'image' => $var2,
        'textTitle' => $var3,
        'textText' => $var4,
        'textPrice' => $var5
    ];
    return save('vingrosana_text', $data);
}

function delVingrosana ($var1)
{
    return delete('vingrosana_text', $var1);
}

function saveKalendars ($title,$year,$month,$day,$time,$max_count,$full,$id)
{
    $data = [
        'title'  => $title,
		'year'  => $year,
		'month'  => $month,
		'day'  => $day,
		'time'  => $time,
		'max_count'  => $max_count,
		'full'  => $full,
		'id'  => $id,
    ];
    return update('kalendars_text', $data);
}

function createKalendars ($title,$year,$month,$day,$time,$max_count,$full)
{
    $data = [
        'title'  => $title,
		'year'  => $year,
		'month'  => $month,
		'day'  => $day,
		'time'  => $time,
		'max_count'  => $max_count,
		'full'  => $full,
    ];
    return save('kalendars_text', $data);
}

function delKalendars ($var1)
{
    return delete('kalendars_text', $var1);
}

function createAddress ($lat,$lng,$street,$streetFull)
{
    $data = [
		'lat' => $lat,
		'lng' => $lng,
		'street' => $street,
		'streetFull' => $streetFull
    ];
    return save('kontakti_text', $data);
}

function updateAddress ($lat,$lng,$street,$streetFull, $id)
{
    $data = [
		'lat' => $lat,
		'lng' => $lng,
		'street' => $street,
		'streetFull' => $streetFull,
		'id' => $id
    ];
    return update('kontakti_text', $data);
}

function delAddress ($var1)
{
    return delete('kontakti_text', $var1);
}

function updateAboutSection ($title,$text,$id)
{
    $data = [
		'title' => $title,
		'text' => $text,
		'id' => $id
    ];
    return update('about_text', $data);
}

function delAbout ($var1)
{
    return delete('about_text', $var1);
}

function createAbout ($title,$text,$image)
{
    $data = [
		'title' => $title,
		'text' => $text,
		'image' => $image
    ];
    return save('about_text', $data);
}

function newGallery ($title,$image)
{
    $data = [
		'title' => $title,
		'image' => $image
    ];
    return save('galleries_text', $data);
}

function newGalImg ($title,$image,$type)
{
	$resp = [];
	foreach ($image as $key => $value) {
		$data = [
			'corr_id' => $title,
			'url' => $image[$key],
			'type' => $type[$key]
		];
		$resp[] = insert('galleries_images', $data);
	}
    return $resp;
}

function delGalerija ($var1)
{
    return delete('galleries_text', $var1);
}

function delSmallGalerija ($var1)
{
    return delete('galleries_images', $var1);
}

function updateFizioterapijaSection ($val1, $val2, $val3, $val4, $val5, $val6)
{
	
	$options=[
		'id' => $val1,
		'title' => $val2,
		'textTitle' => $val3,
		'textText' => $val4,
		'textPrice' => $val5,
		'image' => $val6,
	];
	
	return update('fizioterapija_text', $options);
	
}

function updateVingrosanaSection ($val1, $val2, $val3, $val4, $val5, $val6)
{
	
	$options=[
		'id' => $val1,
		'title' => $val2,
		'textTitle' => $val3,
		'textText' => $val4,
		'textPrice' => $val5,
		'image' => $val6,
	];
	
	return update('vingrosana_text', $options);
	
}