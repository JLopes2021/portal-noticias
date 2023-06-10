<?php
include('./conexao.php');
header('Access-Control-Allow-Origin: *');

$noticiaPost = ("SELECT * FROM `noticias` WHERE `id` = '1' ");
$resultado_usuarios = mysqli_query($conexao, $noticiaPost);
while($row_usuario = mysqli_fetch_assoc($resultado_usuarios)){
    $noticiaPost1 =     "" . $row_usuario['noticia'];
    $noticiaPost1Url =     "" . $row_usuario['url_foto'];
    $noticiaPostRodape =     "" . $row_usuario['rodape'];


}

$noticiaPost = ("SELECT * FROM `noticias` WHERE `id` = '2' ");
$resultado_usuarios = mysqli_query($conexao, $noticiaPost);
while($row_usuario = mysqli_fetch_assoc($resultado_usuarios)){
    $noticiaPost2 =     "" . $row_usuario['noticia'];
    $noticiaPost1Url2 =     "" . $row_usuario['url_foto'];
    $noticiaPostRodape2 =     "" . $row_usuario['rodape'];

}


$noticiaPost = ("SELECT * FROM `noticias` WHERE `id` = '3' ");
$resultado_usuarios = mysqli_query($conexao, $noticiaPost);
while($row_usuario = mysqli_fetch_assoc($resultado_usuarios)){
    $noticiaPost3 =     "" . $row_usuario['noticia'];
    $noticiaPost1Url3 =     "" . $row_usuario['url_foto'];
    $noticiaPostRodape3 =     "" . $row_usuario['rodape'];

}

$data = [
    [
        'noticia' => $noticiaPost1,
        'imagem' => $noticiaPost1Url,
        'rodape' => $noticiaPostRodape,

    ],
    [
        'noticia' => $noticiaPost2,
        'imagem' => $noticiaPost1Url2,
        'rodape' => $noticiaPostRodape2,
    ],
    [
        'noticia' => $noticiaPost3,
        'imagem' => $noticiaPost1Url3,
        'rodape' => $noticiaPostRodape3,
    ]
    ];

die(json_encode($data));
?>