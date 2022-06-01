<?php

//conexion con la base de datos y el servidor
  //$link = mysql_connect("localhost","libreria_pony","root","") or die("<h2>No se encuentra el servidor</h2>");
 // $db = mysql_select_db("libreria_pony",$link) or die("<h2>Error de Conexion</h2>");
include 'conexionbd.php';

if(isset($_POST['miBoton'])){
$nombre=$_POST['nombreUsuario'];
$apellido_p=$_POST['paternoUsuario'];
$apellido_m=$_POST['maternoUsuario'];
$telefono=$_POST['telefonoUsuario'];
$correo=$_POST['correoUsuario'];
$domicilio=$_POST['domicilioUsuario'];
$nombre_usuario=$_POST['nombreDeUsuario'];
$contraseña=$_POST['contraseñaUsuario'];

$req =(strlen($nombre)*strlen($apellido_p)*strlen($apellido_m)*strlen($telefono)*strlen($correo)*strlen($domicilio)*strlen($nombre_usuario)*strlen($contraseña)*strlen($contraseña_r)) or die ("No se han llenado todos los campos");

if($contraseña != $contraseña_r){
die('Las contrasñeas no coinciden <br><br><a href= "registro.html">Volver</a>');

}

mysql_query("INSERT INTO usuarios VALUES ('$nombre','$apellido_p','$apellido_m','$telefono','$correo','$domicilio','$nombre_usuario','$contraseña')",$link); 

echo 
'<h2>Registro completo</h2>';
}
?>

