<?php

include 'conexionbd.php';

$nombre=$_POST['nombreUsuario'];
$apellido_p=$_POST['paternoUsuario'];
$apellido_m=$_POST['maternoUsuario'];
$telefono=$_POST['telefonoUsuario'];
$correo=$_POST['correoUsuario'];
$domicilio=$_POST['domicilioUsuario'];
$nombre_usuario=$_POST['nombreDeUsuario'];
$contraseña=$_POST['contraseñaUsuario'];



 $sql = "INSERT INTO usuarios (Nombre,Apellido_pat,Apellido_mat,Telefono,Email,Domicilio,Usuario,Contraseña) 
   VALUES ('$nombre','$apellido_p','$apellido_m','$telefono','$correo','$domicilio','$nombre_usuario','$contraseña')";

   $result = mysqli_query($conexion,$sql);

if ($result){
	   echo "Datos Insertados";
	   echo'
		<script>
			alert("Registro Exitoso");
		</script>
	';
}
else{
	echo "No pudo Insertarse";
}

?>