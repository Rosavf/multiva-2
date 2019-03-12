<?php

if(isset($_GET['url'])){

    //
    $url=$_GET['url'];

    //
    $jsonRoutes=file_get_contents('../app/core/Routes.json');
    $routes=json_decode($jsonRoutes,true);

    if(!isset($routes[$url])){

        echo('error 404');

    }

    else{

        //de existir vistas...
        if(count($routes[$url]['views'])){

            //arreglo de vistas
            $views=$routes[$url]['views'];

            //iteramos vistas y abrimos cada vista
            foreach($views as $view){

                Controller::view($view);

            }

        //
        }else{ }


    }



    
}


?>