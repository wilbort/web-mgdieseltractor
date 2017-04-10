<?php
$fecha=date("d-m-y");
$hora=date("h:i:s");
$destino="mmoreno@mgdieseltractor.com";
$asunto="CONSULTA WEB";
$desde= 'form:' .$_POST['email'] ;


$comentario="
\n 
Nombre: $_POST[nombre] \n 
Email: $_POST[correo] \n
Consulta: $_POST[mensaje] \n
Enviado el $fecha a las $hora\n";

mail($destino,$asunto,$comentario,$desde);
header("location: ../contactenos.html");
?>