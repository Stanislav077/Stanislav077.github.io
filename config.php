<?php
$host = $_SERVER['HTTP_HOST'];
// HTTP
define('HTTP_SERVER', 'http://'.$host.'/');

// HTTPS
define('HTTPS_SERVER', 'http://'.$host.'/');

$dir = dirname(__FILE__);

// DIR
define('DIR_APPLICATION',  $dir.'/catalog/');
define('DIR_SYSTEM',  $dir.'/system/');
define('DIR_LANGUAGE',  $dir.'/catalog/language/');
define('DIR_TEMPLATE',  $dir.'/catalog/view/theme/');
define('DIR_CONFIG',  $dir.'/system/config/');
define('DIR_IMAGE',  $dir.'/image/');
define('DIR_CACHE',  $dir.'/system/storage/cache/');
define('DIR_DOWNLOAD',  $dir.'/system/storage/download/');
define('DIR_LOGS',  $dir.'/system/storage/logs/');
define('DIR_MODIFICATION',  $dir.'/system/storage/modification/');
define('DIR_UPLOAD',  $dir.'/system/storage/upload/');
define('DIR_UPLOADS',  $dir.'/catalog/controller/uplodpost/');


// DB
define('DB_DRIVER', 'mysqli');
define('DB_HOSTNAME', 'masgr2.mysql.tools');
define('DB_USERNAME', 'masgr2_aqua');
define('DB_PASSWORD', '45qwg7f6');
define('DB_DATABASE', 'masgr2_aqua');
define('DB_PORT', '3306');
define('DB_PREFIX', 'oc_');
