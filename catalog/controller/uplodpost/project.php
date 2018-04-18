<?php
// Проверяем загружен ли файл
$customer_id = $_POST['id'];
if(is_dir(__DIR__  .  DIRECTORY_SEPARATOR  . 'customer_'.$customer_id)){
  //  $count = count_files(__DIR__  .  DIRECTORY_SEPARATOR  . 'customer_'.$customer_id);
    $dir = opendir(__DIR__  .  DIRECTORY_SEPARATOR  . 'customer_'.$customer_id);
    $count = 0;
    while($file = readdir($dir)){
        if($file == '.' || $file == '..' || is_dir('path/to/dir' . $file)){
            continue;
        }
        $count++;
    }
}else{
    $count =0;
}


if(  is_uploaded_file($_FILES["file"]["tmp_name"] )  )
{
if($count < 10){

    if(preg_match('!\.(doc|pdf|xlsx)$!i', $_FILES["file"]["name"])) {

        if(!is_dir(__DIR__  .  DIRECTORY_SEPARATOR  . 'customer_'.$customer_id)){
            mkdir(__DIR__  .  DIRECTORY_SEPARATOR  . 'customer_'.$customer_id, 0700);
        }

        move_uploaded_file
        (

            $_FILES["file"]["tmp_name"],
            __DIR__  .  DIRECTORY_SEPARATOR  .'customer_'.$customer_id. DIRECTORY_SEPARATOR  .  $_FILES["file"]["name"]

        );
        echo("Файл загружен!");

        }else{

        echo("Не верный формат, поддерживаемый формат(doc,pdf,xlsx)!");

        }

}else{
    echo("Ошибка файлов слишком много");
}



} else {
    echo("Ошибка загрузки файла");
}

?>
