<?php

$configJson=file_get_contents('../app/config/config.json');
$config=json_decode($configJson,true);
define('URL',$config['url']);

?>