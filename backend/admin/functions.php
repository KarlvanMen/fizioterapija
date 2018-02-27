<?php

function createUser($user_data)
{
	
	// checkParams($user_data, ["photo", "name", "family", "country", "countryadmin", "city", "company", "shopadmin", "login", "language", "megaadmin", 'password', 'status']);	
	checkRequiredParams($user_data, ['login', 'password']);	
	
	$user_data['password'] = md5($user_data['password']);	
	if(
        !(checkBy('user', ['login' => $user_data['login']]) > 0)
    ) {		
		$res = save('user', $user_data);		
	}	else {
		$res = 'user exists';
	}
	
	return $res;	
}

function createNewUser($user_data)
{
	
	// checkParams($user_data, ["photo", "name", "family", "country", "countryadmin", "city", "company", "shopadmin", "login", "language", "megaadmin", 'password', 'status']);	
	checkRequiredParams($user_data, ['login', 'password']);	
	
	$user_data['password'] = md5($user_data['password']);	
	if(
        !(checkBy('user', ['login' => $user_data['login']]) > 0)
    ){		
		$res = save('new_users', $user_data);		
	} else {
        pj(['error' => 'user already exists']);
    }
	
	return $res;	
}

function updateUser($user_data)
{
	
    // checkParams($user_data, ["photo", "name", "family", "country", "countryadmin", "city", "company", "shopadmin", "login", "language", "megaadmin", 'password', 'status', 'id']);
	
	checkRequiredParams($user_data, ['id']);	
	
	if (array_key_exists('password', $user_data)) {		
		$user_data['password'] = md5($user_data['password']);		
	}
	
	
	$res = checkBy('user', ['login' => $user_data['login']]);
	
	if($res === $user_data['id']) {
		
		$res = save('user', $user_data);
		
	}
	
	
	return $res;
	
}

function deleteUser($id)
{
	
	$res = save('user', ['id' => $id, 'status' => 'deleted']);
	
}

function createSubject($data)
{
	
	checkParams($data, ['name', 'country', 'alias', 'language', 'status']);
	
	checkRequiredParams($data, ['name', 'alias', 'language']);
	
	
	return saveByAlias('subject', $data);
	
}

function updateSubject($data)
{
	
	checkParams($data, ['name', 'country', 'alias', 'language', 'status']);
	
	checkRequiredParams($data, ['alias', 'language']);
	
	
	return saveByAlias('subject', $data);
	
}

function deleteSubject($alias)
{
	
	return deleteByAlias('subject', $alias);
	
}

function createCourse($data)
{
	
	checkParams($data, ['name', 'country', 'alias', 'language', 'status', 'subject_alias']);
	
	checkRequiredParams($data, ['name', 'alias', 'language']);
	
	
	return saveByAlias('course', $data);
	
}

function updateCourse($data)
{
	
	checkParams($data, ['name', 'country', 'alias', 'language', 'status', 'subject_alias']);
	
	checkRequiredParams($data, ['alias', 'language']);
	
	
	return saveByAlias('course', $data);
	
}

function deleteCourse($alias)
{
	
	return deleteByAlias('course', $alias);
	
}

function createMaterial($data)
{
	
	checkParams($data, ['name', 'country', 'alias', 'language', 'status', 'course_alias']);
	
	checkRequiredParams($data, ['name', 'alias', 'language']);
	
	
	return saveByAlias('material', $data);
	
}

function updateMaterial($data)
{
	
	checkParams($data, ['name', 'country', 'alias', 'language', 'status', 'course_alias']);
	
	checkRequiredParams($data, ['alias', 'language']);
	
	
	return saveByAlias('material', $data);
	
}

function deleteMaterial($alias)
{
	
	return deleteByAlias('material', $alias);
	
}

function createNewFeedback($data)
{	
	checkRequiredParams($data, ['name', 'surname', 'date', 'feedback']);		
	return save('feedback', $data);	
}