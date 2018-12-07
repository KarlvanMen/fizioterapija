<?php

function login()
{
    pj(
        [
            'result' => auth(getPost('login'), getPost('password')),
            'COOKIE' => [
                'id' => getId(),
                'login' => isAuth(),
                'session' => session_id()
            ]
        ]
    );
}

function logout()
{
    out();
    pj(['logout' => 'done']);
}

function getUserData()
{
    pj(
        [
            'users' => getLogin(), 
            'login' => isAuth(),
            'session' => session_id()
        ]
    );
}

function getUser()
{
    $user = fetchBy('user', ['id' => getGet('id')])[0];
    pj(
        [
            'name' => $user['name'],
            'family' => $user['family'],
            'country' => $user['country'],
            'shop' => $user['company'],
            'admin' => [
                $user['shopadmin'],
                $user['countryadmin'],
                $user['megaadmin'],
            ],
            'city' => $user['city'],
            'photo' => $user['photo'],
            'status' => $user['status'],
            'language' => $user['language'],
        ]
    );
}

function getData () 
{
    pj(
        [
            'home'          =>  getHomeData(),
            'fizioterapija' =>  getFizioData(),
            'vingrosana'    =>  getVingroData(),
            'kalendars'     =>  getKalendarsData(),
            'parmums'       =>  getParMumsData(),
            'galerijas'     =>  getGalerijasData(),
            'kontakti'      =>  getKontaktiData(),
        ]
    );
}

function editHome()
{
	pj(
        [
            'response'  => updateHome(getPost('value'))
        ]
    );
}

function editFizio()
{
	pj(
        [
            'response'  => updateFizio(getPost('quote'))
        ]
    );
}

function editVingr()
{
	pj(
        [
            'response'  => updateVingr(getPost('pageLinkTitle'))
        ]
    );
}

function editKont()
{
	pj(
        [
            'response'  => updateKont(getPost('siaTitle'),getPost('siaEmail'),getPost('siaPhone'))
        ]
    );
}

function editAbout()
{
	pj(
        [
            'response'  => updateAbout(getPost('value'))
        ]
    );
}
function editVideo()
{
	pj(
        [
            'response'  => updateVideo(getPost('title'),getPost('image'),getPost('id'))
        ]
    );
}

function uploadImg()
{
    pj(
        [
            'response' => uploadImage()
        ]
    );
}

function newFizio() 
{
    pj(
        [
            'response' => newFizioterapija(getPost('title'),getPost('image'),getPost('textTitle'),getPost('textText'),getPost('textPrice'))
        ]
    );
}

function delFizio() 
{
    pj(
        [
            'response' => delFizioterapija(getPost('id'))
        ]
    );
}
function newVingr() 
{
    pj(
        [
            'response' => newVingrosana(getPost('title'),getPost('image'),getPost('textTitle'),getPost('textText'),getPost('textPrice'))
        ]
    );
}

function delVingr() 
{
    pj(
        [
            'response' => delVingrosana(getPost('id'))
        ]
    );
}

function saveKal() 
{
    pj(
        [
            'response' => saveKalendars(getPost('title'),getPost('year'),getPost('month'),getPost('day'),getPost('time'),getPost('max_count'),getPost('full'),getPost('location'),getPost('id'))
        ]
    );
}

function createKal() 
{
    pj(
        [
            'response' => createKalendars(getPost('title'),getPost('year'),getPost('month'),getPost('day'),getPost('time'),getPost('max_count'),getPost('full'),getPost('location'))
        ]
    );
}

function delKal() 
{
    pj(
        [
            'response' => delKalendars(getPost('id'))
        ]
    );
}

function createAdd() 
{
    pj(
        [
            'response' => createAddress(getPost('lat'),getPost('lng'),getPost('street'),getPost('streetFull'),getPost('additional'))
        ]
    );
}

function updateKonta() 
{
    pj(
        [
            'response' => updateKont(getPost('siaTitle'),getPost('siaPhone'),getPost('siaEmail'))
        ]
    );
}

function updateAdd() 
{
    pj(
        [
            'response' => updateAddress(getPost('lat'),getPost('lng'),getPost('street'),getPost('streetFull'),getPost('additional'),getPost('id'))
        ]
    );
}

function delAdd() 
{
    pj(
        [
            'response' => delAddress(getPost('id'))
        ]
    );
}

function updateAbouta() 
{
    pj(
        [
            'response' => updateAboutSection(getPost('title'),getPost('text'),getPost('id'))
        ]
    );
}

function delAb() 
{
    pj(
        [
            'response' => delAbout(getPost('id'))
        ]
    );
}

function newAbout() 
{
    pj(
        [
            'response' => createAbout(getPost('title'),getPost('text'),getPost('image'))
        ]
    );
}

function newGal() 
{
    pj(
        [
            'response' => newGallery(getPost('title'),getPost('image'))
        ]
    );
}

function galImg() 
{
    pj(
        [
            'response' => newGalImg(getPost('corr_id'),getPost('img'),getPost('type'))
        ]
    );
}

function delGal() 
{
    pj(
        [
            'response' => delGalerija(getPost('id'))
        ]
    );
}

function delSmallGal() 
{
    pj(
        [
            'response' => delSmallGalerija(getPost('id'))
        ]
    );
}

function updateFiz() 
{
    pj(
        [
            'response' => updateFizioterapijaSection(getPost('id'),getPost('title'),getPost('textTitle'),getPost('textText'),getPost('textPrice'),getPost('image'))
        ]
    );
}

function updateVin() 
{
    pj(
        [
            'response' => updateVingrosanaSection(getPost('id'),getPost('title'),getPost('textTitle'),getPost('textText'),getPost('textPrice'),getPost('image'))
        ]
    );
}

function send_tr() 
{
    
    $name = getPost('name');
    $phone = getPost('phone');
    $email = getPost('email');
    $insurance = getPost('insurance');
    $personaId = getPost('personaId');
    $trainings = getPost('trainings');

    $to = "info@fizioaz.lv";
    // this is your Email address
    $from = "trainings@fizioaz.lv";
    // this is the sender's Email address
	$subject = "Pieteikšanās uz nodarbību " . date("Y-m-d H:i:s");
	$message = "<i>Vārds: ".$name. "<br>E-pasts: " . $email. "<br>Tālr.: " . $phone. "<br></i>";
	$message .= "<i>Vajadzīgs rēķins apdrošināšanai: ".$insurance. "<br>Personas kods: " . $personaId. "<br></i>";
    $message .= "<i>Nodarbības:<br>";
    foreach ($trainings as $key => $value) {
        $message .= "<b>".$value['Nosaukums'] . "</b><br>";
        $message .= $value['Laiks'] . "<br>";
    }
	
	$headers = "From: ".$from."\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\n";
	$response = 'something went wrong';
	if(!empty($email) || !empty($phone)){
		mail($to,$subject,$message,$headers);
        $response = 'should be sent';
	}
    pj(
        [
            'response' => $response
        ]
    );
}

function send_qt() 
{
    
    $name = getPost('name');
    $phone = getPost('phone');
    $email = getPost('email');
    $question = getPost('question');

    $to = "info@fizioaz.lv";
    // this is your Email address
    $from = "trainings@fizioaz.lv";
    // this is the sender's Email address
	$subject = "Jautājums #" . date_timestamp_get(date_create());
	$message = "<i>Vārds: ".$name. "<br>E-pasts: " . $email. "<br>Tālr.: " . $phone. "<br></i>";
	$message .= "<i>Jautājums: ".$question. "<br></i>";
	
	$headers = "From: ".$from."\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\n";
	$response = 'something went wrong';
	if(!empty($email) || !empty($phone)){
		mail($to,$subject,$message,$headers);
        $response = 'should be sent';
	}
    pj(
        [
            'response' => $response
        ]
    );
}