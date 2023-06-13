<?php
header('Access-Control-Allow-Origin: *');

$data = [
    [
        'noticia' => 'O Palmeiras se prepara para ter o Allianz Parque como desfalque constante no segundo semestre de 2023. O clube fez uma análise usando a tabela que tem como base até aqui e os shows agendados para a arena e concluiu que conta com apenas três partidas garantidas no returno do Brasileirão com 100% das arquibancadas liberadas, justamente na reta final da temporada.',
        'imagem' => 'https://conteudo.imguol.com.br/c/esporte/20/2023/04/29/raphael-veiga-do-palmeiras-comemora-apos-marcar-no-classico-contra-o-corinthians-pelo-brasileirao-1682806987083_v2_450x600.jpg',
        'rodape' => 'Time do Palmeiras',

    ],
    [
        'noticia' => 'O Palmeiras tem um obstáculo a resolver pela frente nas próximas semanas: uma dívida da contratação de Piquerez. Segundo apuração da ESPN confirmada pela reportagem do LANCE!, o Peñarol-URU, antigo clube do lateral, acionou a Fifa buscando receber a parcela atrasada. O Verdão admite a questão e espera resolver a pendência antes das sanções da entidade máxima do futebol.',
        'imagem' => 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/01/06/689326464-63b75ff0124be.jpeg',
        'rodape' => 'Piquerez com a Taça do Brasileirão',

    ],
    [
        'noticia' => 'Abel e sua comissão têm 212 jogos pelo Palmeiras, sendo 125 vitórias, 51 empates e 36 derrotas. A estreia foi diante do Bragantino em 5 de novembro de 2020.',
        'imagem' => 'https://conteudo.imguol.com.br/c/esporte/23/2023/04/13/abel-ferreira-tecnico-do-palmeiras-apos-o-bicampeonato-paulista-1681357148336_v2_450x600.jpg',
        'rodape' => 'Abel Ferreira',
    ]
    ];

die(json_encode($data));
?>
