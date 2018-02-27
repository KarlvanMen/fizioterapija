<?php

function fetchBy($table, $criteria)
{
    global $pdo, $table_prefix;

    $sql=sprintf("SELECT * FROM %s" . $table . criteriaToSQL($criteria), $table_prefix);
    $stm = $pdo->prepare($sql);
    $stm->execute($criteria);
    $result = $stm->fetchAll(PDO::FETCH_ASSOC);

    return $result;
}

function fetchOneBy($table, $criteria)
{
    $result = fetchBy($table, $criteria);
    if (count($result) === 1) {
        return $result[0];
    }

    return null;
}

function checkBy($table, $criteria)
{
    global $pdo, $table_prefix;

    $sql=sprintf("SELECT id FROM %s" . $table . criteriaToSQL($criteria), $table_prefix);
    $stm = $pdo->prepare($sql);
    $stm->execute($criteria);
    if ($result = $stm->fetch()) {
        return $result['id'];
    }

    return false;
}

function fetchAll($table)
{
    $criteria = [];
    global $pdo, $table_prefix;

    $sql=sprintf("SELECT * FROM %s" . $table . criteriaToSQL($criteria), $table_prefix);
    $stm = $pdo->prepare($sql);
    $stm->execute($criteria);
    $result = $stm->fetchAll(PDO::FETCH_ASSOC);

    return $result;
}

function criteriaToSQL($criterias)
{
    $result = '';
    foreach ($criterias as $criteria => $value) {
        $result = $result . ' ' . $criteria . ' = :' . $criteria . ' AND';
    }

    if ($result !== '') {
        $result = ' WHERE ' . rtrim($result, 'AND');
    }

    return $result;
}

function optionsToSQL($options)
{
    $result = '';
    $keys = '';
    foreach ($options as $option => $value) {
        $result .= ', ' . $option;
        $keys .= ', :' . $option;
    }
    if ($result !== '') {
        $result = "(".ltrim($result, ',').") VALUES(".ltrim($keys, ', ').")";
    }

    return $result;
}

function insert($table, $options)
{
    global $pdo, $table_prefix;

    $sql=sprintf('INSERT INTO %s' . $table . optionsToSQL($options), $table_prefix);
    $stm = $pdo->prepare($sql);
    $stm->execute($options);
    $id = $pdo->lastInsertId();

    // "INSERT INTO new_users(photo, name, family) VALUES(:photo, :name, :family)"
    // "INSERT INTO testtable(name, lastname, age) VALUES(:fname, :sname, :age)"
    return $id;
}

function save($table, $options)
{
    global $pdo, $table_prefix;

    $where = '';
    $whereCriteria = [];
    if(array_key_exists('id', $options)) {
        $where = ' WHERE id =:id ';
        $whereCriteria = ['id' => $options['id']];
    }

    if ($where !== '') {
        $sql=sprintf('SELECT id FROM %s' . $table . $where,$table_prefix);

        $stm = $pdo->prepare($sql);
        $stm->execute($whereCriteria);
    }
    if ($where === '' || !$result = $stm->fetch()) {
        $sql=sprintf('INSERT INTO %s' . $table . optionsToSQL($options),$table_prefix);
    } else {
        $sql=sprintf('UPDATE %s' . $table . optionsToSQL($options) . $where,$table_prefix);
    }
    $stm = $pdo->prepare($sql);
    $stm->execute($options);
    $id = $pdo->lastInsertId();

    return $id;
}

function saveByAlias($table, $data)
{
    if (
        !array_key_exists('alias', $data) ||
        !array_key_exists('language', $data)
    ) {
        pj(['error' => 'wrong params']);
    }

    $res = save($table, $data);

    return $res;
}

function deleteByAlias($table, $alias)
{
    global $pdo, $table_prefix;

    $sql=sprintf('UPDATE %s' . $table . ' SET status =:status WHERE alias =:alias',$table_prefix);

    $stm = $pdo->prepare($sql);
    $stm->execute([
        'status' => 'deleted',
        'alias' => $alias
    ]);

    return true;
}

function update($table, $options) 
{
    global $pdo, $table_prefix;
    
    $setVal = '';
    $where = '';

    foreach ($options as $key => $value) {
        if($key === 'id') {
            $where = "`" . $table . "`.`id` = " . $value;
        }
        $setVal .= "`" . $key . "` = '" . $value . "', ";
    }
    $setVal = substr($setVal, 0, -2);
    $sql = "UPDATE `".$table."` SET " . $setVal . " WHERE " . $where;
    
    $stm = $pdo->exec($sql);

    return $stm;
}

function delete($table, $id)
{
    // DELETE FROM `fizioterapija_text` WHERE `fizioterapija_text`.`id` = 10
    global $pdo, $table_prefix;

    $sql=sprintf('DELETE FROM %s' . $table . ' WHERE id = %s',$table_prefix,$id);

    $stm = $pdo->prepare($sql);
    $stm->execute();

    return true;
}

// test $stm statemenets
function parms($string,$data) {
    $indexed=$data==array_values($data);
    foreach($data as $k=>$v) {
        if(is_string($v)) $v="'$v'";
        if($indexed) $string=preg_replace('/\?/',$v,$string,1);
        else $string=str_replace(":$k",$v,$string);
    }
    return $string;
}