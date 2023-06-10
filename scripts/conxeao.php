<?php
 $servidor="localhost";
 $usuario="root";
 $senha="";
 $dbname=""; /* Põe o nome do teu banco de dados aqui */
 $conexao=mysqli_connect($servidor, $usuario, $senha, $dbname);
 if(!$conexao){
   die("houve um erro: ".mysqli_connect_error());
  }

  
 ?>

 