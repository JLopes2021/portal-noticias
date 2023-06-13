const images = [
  {
    title: 'Primeira partida da Seleção Brasileira',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brazil_v_Exeter_City_%281914%29.jpg/220px-Brazil_v_Exeter_City_%281914%29.jpg',
    rodape: 'A primeira partida da seleção brasileira contra o Exeter City Football Club em 1914',
  },
  {
    title: 'Seleção indo para a Copa de 1938',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sele%C3%A7%C3%A3o_Brasileira_embarcando_para_a_Copa_do_Mundo_de_1934.tif/lossy-page1-220px-Sele%C3%A7%C3%A3o_Brasileira_embarcando_para_a_Copa_do_Mundo_de_1934.tif.jpg',
    rodape: 'Seleção Brasileira embarcando para a Copa do Mundo de 1934. Foto: Arquivo Nacional'
  },
  {
    title: 'Seleção Brasileira em Buenos Aires, preparação para a Copa de 1938',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sele%C3%A7%C3%A3o_Brasileira_de_1937.tif/lossy-page1-220px-Sele%C3%A7%C3%A3o_Brasileira_de_1937.tif.jpg',
    rodape: 'Seleção Brasileira em Buenos Aires, preparação para a Copa de 1938'
  },
  {
    title: 'Seleção contra a Polônia na Copa de 1938',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Br%C3%A9sil-pologne1938.jpg/220px-Br%C3%A9sil-pologne1938.jpg',
    rodape: 'Seleção contra a Polônia na Copa de 1938'
  },
  {
    title: 'Seleção Brasileira na Copa de 1950',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sele%C3%A7%C3%A3o_Brasileira_na_Copa_do_Mundo_de_1950.tif/lossy-page1-220px-Sele%C3%A7%C3%A3o_Brasileira_na_Copa_do_Mundo_de_1950.tif.jpg',
    rodape: 'Seleção Brasileira na Copa de 1950. Ademir de Menezes (terceiro da esquerda para a direita, agachado) foi o artilheiro da competição',
  },
  {
    title: 'Gol da Seleção Brasileira na final da Copa do Mundo de 1950',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Gol_de_Fria%C3%A7a_na_Copa_do_Mundo_de_1950.tif/lossy-page1-220px-Gol_de_Fria%C3%A7a_na_Copa_do_Mundo_de_1950.tif.jpg',
    rodape: 'Gol da Seleção Brasileira na final da Copa do Mundo de 1950',
  },
  {
    title: 'Seleção Brasileira embarcando para a Copa do Mundo de 1954',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sele%C3%A7%C3%A3o_Brasileira_embarcando_para_a_Copa_do_Mundo_de_1954.tif/lossy-page1-220px-Sele%C3%A7%C3%A3o_Brasileira_embarcando_para_a_Copa_do_Mundo_de_1954.tif.jpg',
    rodape: 'Seleção Brasileira embarcando para a Copa do Mundo de 1954. Foto: Arquivo Nacional',
  },
  {
    title: 'Seleção Brasileira na Copa de 1958',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Brasil_-_1958.jpg/250px-Brasil_-_1958.jpg',
    rodape: 'Seleção Brasileira na Copa de 1958',
  },
  {
    title: 'Vavá e Garrincha no primeiro gol do Brasil na final da Copa do Mundo de 1958 contra a Suécia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Garrincha_and_Vav%C3%A0_1958_World_Cup_final.jpg/250px-Garrincha_and_Vav%C3%A0_1958_World_Cup_final.jpg',
    rodape: 'Vavá e Garrincha no primeiro gol do Brasil na final da Copa do Mundo de 1958 contra a Suécia. Os suecos saíram na frente, mas Vavá virou o jogo e a seleção aplicou uma goleada de 5 a 2 no adversário',
  },
  {
    title: 'Pelé salta para cabeceio durante a final contra a Suécia em 1958',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Pel%C3%A9_jump_1958.jpg/200px-Pel%C3%A9_jump_1958.jpg',
    rodape: 'Pelé salta para cabeceio durante a final contra a Suécia em 1958',
  },
  {
    title: 'Jogadores da Seleção Brasileira comemoram o primeiro título mundial na Copa de 1958',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Winning_brazilian_National_team_1958.jpg/250px-Winning_brazilian_National_team_1958.jpg',
    rodape: 'Jogadores da Seleção Brasileira comemoram o primeiro título mundial na Copa de 1958',
  },
  {
    title: 'Retrato da Seleção Brasileira de Futebol de 1962',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Werner_Haberkorn_-_Retrato_da_Sele%C3%A7%C3%A3o_Brasileira_de_Futebol_de_1962_2.jpg/200px-Werner_Haberkorn_-_Retrato_da_Sele%C3%A7%C3%A3o_Brasileira_de_Futebol_de_1962_2.jpg',
    rodape: 'Retrato da Seleção Brasileira de Futebol de 1962, de Werner Haberkorn.',
  },
  {
    title: 'O craque Garrincha',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MFdSantos-Garrincha.jpg/200px-MFdSantos-Garrincha.jpg',
    rodape: 'O craque Garrincha, jogador mais importante da história da seleção e o que fez o futebol brasileiro ganhar o apelido de "futebol arte".',
  },
  {
    title: 'Vavá, até então o único jogador da história que fez gols em duas finais de Copa do Mundo seguidas',
    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1d/Vav%C3%A1.jpeg/200px-Vav%C3%A1.jpeg',
    rodape: 'Vavá, até então o único jogador da história que fez gols em duas finais de Copa do Mundo seguidas, feito que foi repetido por Kylian Mbappé em 2022, após o mesmo ter marcado na final da edição anterior em 2018.',
  },
  {
    title: '',
    url: '',
    rodape: '',
  },
  {
    title: '',
    url: '',
    rodape: '',
  },
]

export default images