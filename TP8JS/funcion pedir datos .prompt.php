<?php
    // 1) Agregar Contacto
    // 2) Eliminar Contacto 
    // 3) Ver contacto 
    // 4) Salir
    // 1 ARRAY GLOBAL
$datos=array();

function(&$datos){
    do{
        echo "ing el nombre del contacto";
        $nom=fgets(STDIN);
        $datos[]=$nom;
    }while($resp="no");
}
function(&$datos){
    
    
}
?>