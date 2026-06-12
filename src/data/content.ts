export type IntroContent = {
  title: string
  eyebrow: string
  note: string
  from: string
  to: string
  buttonLabel: string
}

export type LetterContent = {
  eyebrow: string
  title: string
  greeting: string
  paragraphs: string[]
  signOff: string
  signature: string
}

export type AlbumContent = {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  coverSrc: string
  coverAlt: string
  highlightTrack: string
  highlightNote: string
  currentTime: string
  duration: string
}

export type PhotoMemory = {
  src: string
  alt: string
  caption: string
}

export type PlaylistTrack = {
  title: string
  artist: string
  reason: string
  spotifyUrl: string
  isSpecial?: boolean
}

export type TimelineMoment = {
  title: string
  text: string
}

export type FinalSurpriseContent = {
  eyebrow: string
  title: string
  buttonLabel: string
  message: string
  signature: string
}

export const introContent: IntroContent = {
  title: 'Para a Giovanna',
  eyebrow: 'para o meu bem, meu amor e minha Gigi',
  note:
    'Uma cartinha digital feita com muito amor para você. Espero que goste, gatinha! ❤️ (Ainda te devo uma física)',
  from: 'Cauê',
  to: 'Giovanna',
  buttonLabel: 'Abrir cartinha',
}

// Edite os textos da carta aqui quando quiser personalizar mais.
export const letterContent: LetterContent = {
  eyebrow: 'Cartinha de entrada',
  title: 'Uma cartinha feita para você',
  greeting: 'Meu amor,',
  paragraphs: [
    'Eu tentei fazer uma página bonita o suficiente pra você, mas infelizmente ainda não inventaram CSS capaz de competir com seu sorriso. (Essa aqui o chat me ajudou, não consegui nada melhor)',
    'Tem muita coisa aqui que me lembra a gente. Quis fazer algo diferente, que lembrasse a gente, que fosse especial. Espero que goste da surpresa!',
    'Feliz Dia dos Namorados, gatinha. Eu escolheria você de novo, até no dia em que eu provavelmente me declarei e nem lembro direito.',
  ],
  signOff: 'Com amor,',
  signature: 'Cauê.',
}

export const albumContent: AlbumContent = {
  eyebrow: 'Nossa capa de álbum',
  title: 'Nossa trilha sonora',
  subtitle: 'Cauê & Giovanna',
  description: 'Algumas faixas da nossa história.',
  coverSrc: '/assets/foto1.jpg',
  coverAlt: 'Nossa capa principal de álbum',
  highlightTrack: 'Criminals — CRX',
  highlightNote:
    'Nossa foto. Nossa música. Nós. Não tem eu e você, só nós.',
  currentTime: '01:13',
  duration: '04:54',
}

// Troque os caminhos e legendas abaixo pelas suas fotos em public/assets.
export const photoMemories: PhotoMemory[] = [
  {
    src: '/assets/foto1.jpg',
    alt: 'Memória 1 de Cauê e Giovanna',
    caption: 'Nossa primeira foto de verdade (e a muie fofocando no fundo)',
  },
  {
    src: '/assets/foto2.jpg',
    alt: 'Memória 2 de Cauê e Giovanna',
    caption: 'Eu não sei de onde surgiu essa foto, mas ela é fofinha até (eu to péssimo)',
  },
  {
    src: '/assets/foto3.jpg',
    alt: 'Memória 3 de Cauê e Giovanna',
    caption: 'sem combinar, a gente combina😝',
  },
  {
    src: '/assets/foto4.jpg',
    alt: 'Memória 4 de Cauê e Giovanna',
    caption: 'ISSO É FOTÃO, TÁ?',
  },
  {
    src: '/assets/foto5.jpg',
    alt: 'Memória 5 de Cauê e Giovanna',
    caption: 'Muito fofinha essa foto, amo você Sherlock',
  },
  {
    src: '/assets/foto6.jpg',
    alt: 'Memória 6 de Cauê e Giovanna',
    caption: 'Uma recente, hihi',
  },
  {
    src: '/assets/foto7.jpg',
    alt: 'Memória 7 de Cauê e Giovanna',
    caption: 'Eu amo fotinhas assim',
  },
  {
    src: '/assets/foto8.jpg',
    alt: 'Memória 8 de Cauê e Giovanna',
    caption: 'Eu não sei porque, mas eu AMO essa foto',
  },
  {
    src: '/assets/foto9.jpg',
    alt: 'Memória 9 de Cauê e Giovanna',
    caption: 'Também não sei de onde saiu, mas amo',
  },
  {
    src: '/assets/foto10.jpg',
    alt: 'Memória 10 de Cauê e Giovanna',
    caption: 'Top rolês da história (se é que me entende 😈)',
  },
  {
    src: '/assets/foto11.jpg',
    alt: 'Memória 11 de Cauê e Giovanna',
    caption: 'Ó nóis criancinha de IA',
  },
  {
    src: '/assets/foto12.jpg',
    alt: 'Memória 12 de Cauê e Giovanna',
    caption: 'Qualidade é a chave',
  },
  {
    src: '/assets/foto13.jpg',
    alt: 'Memória 13 de Cauê e Giovanna',
    caption: 'Mais um fotão, amo essa',
  },
  {
    src: '/assets/foto14.jpg',
    alt: 'Memória 14 de Cauê e Giovanna',
    caption: 'E essa jantinha aqui?',
  },
  {
    src: '/assets/foto15.jpg',
    alt: 'Memória 15 de Cauê e Giovanna',
    caption: 'Mais uma desse dia porque a gente tava bonitinho',
  },
  {
    src: '/assets/foto16.jpg',
    alt: 'Memória 16 de Cauê e Giovanna',
    caption: 'Primeiro cineminha hihi',
  },
  {
    src: '/assets/foto17.jpg',
    alt: 'Memória 17 de Cauê e Giovanna',
    caption: 'Esse dia foi MUITO BOM (dei pt e depois você sabe 😈)',
  },
  {
    src: '/assets/foto18.jpg',
    alt: 'Memória 18 de Cauê e Giovanna',
    caption: 'Minhas duas coisas favoritas: seu pézinho e Dexter',
  },
]

// Cole aqui o link do Spotify ou o link de incorporação.
export const playlistTracks: PlaylistTrack[] = [
  {
    title: 'This I Love',
    artist: 'Guns N’ Roses',
    reason:
      'Essa música é Você.',
    spotifyUrl:
      'https://open.spotify.com/embed/track/2FEWcWHnDmGD6WSqpW4VYu?utm_source=generator&si=b4660fbdcfb54aa7',
    isSpecial: true,
  },
  {
    title: 'Criminals',
    artist: 'CRX',
    reason:
      'Podemos considerar essa nossa música oficialmente né? Sabe aquele trecho: "I´ve been looking for you" e aquele "I´m getting lost in your charm"? Pois é...',
    spotifyUrl:
      'https://open.spotify.com/embed/track/4D3zikzS4IANaX9ADlpmFh?utm_source=generator&si=d20d5649b4f145e4',
  },
  {
    title: 'Let Down',
    artist: 'Radiohead',
    reason:
      'pela frase “One day, I am gonna grow wings”, e por tudo que ela significa pra nós. Vamos tatuar ela ainda.',
    spotifyUrl:
      'https://open.spotify.com/embed/track/2fuYa3Lx06QQJAm0MjztKr?utm_source=generator&si=e23ba6aa5ba74cab',
  },
  {
    title: 'Take On Me',
    artist: 'a-ha',
    reason:
      'Eu não sei porque, mas sessa música me lembra você',
    spotifyUrl:
      'https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L?utm_source=generator&si=2147e334d8ab453c',
  },
  {
    title: 'Pra Sempre Com Você',
    artist: 'Jorge & Mateus',
    reason: 'Espero que eu não tenha errado essa e a próxima, mas me lembro de você dedicar elas pra gente...',
    spotifyUrl:
      'https://open.spotify.com/embed/track/2KGv51jgAz8OTjNPyRryfq?utm_source=generator&si=1a4786b2ea144a81',
  },
  {
    title: 'Os Anjos Cantam',
    artist: 'Jorge & Mateus',
    reason:
      'Acertei? Espero que sim, sou ruim de lembrar as vezes',
    spotifyUrl:
      'https://open.spotify.com/embed/track/6ccKu0LwJzOhLAxBwP2PTk?utm_source=generator&si=416e38eef86a420f',
  },
  {
    title: 'All I Wanted Was You',
    artist: 'Paramore',
    reason:
      'Simplesmente porque eu quero você. Precisa explicar? Dá pra ver nos meus olhos. E amo o fato de você cantar essa também.',
    spotifyUrl:
      'https://open.spotify.com/embed/track/1Bv3h7Vc4AaYA2BcSM3rVd?utm_source=generator&si=81bfd5fc8b9c4845',
  },
  {
    title: 'A Little Death',
    artist: 'The Neighbourhood',
    reason:
      'O fato de você conhecer essa música, e a gente ter algo com TNBH me faz lembrar de você com essa.',
    spotifyUrl:
      'https://open.spotify.com/embed/track/0Ot6e3wYVQQ1Us9PM977jE?utm_source=generator&si=6d9e0a2121bf4d7f',
  },
]

export const timelineMoments: TimelineMoment[] = [
  {
    title: 'O dia do olhar na van',
    text: 'A gente nunca vai lembrar quando isso aconteceu, mas eu diria que foi o dia mais importante da nossa história.',
  },
  {
    title: 'O segundo dia do olhar',
    text: 'Aparentemente um olhar só não foi suficiente pra bagunçar tudo, então teve que ter um segundo no dia da escada.',
  },
  {
    title: '13/09/2025 — o dia que eu provavelmente me declarei',
    text: 'Provavelmente. Acho que você podia aproveitar essa data maravilhosa e contar o que eu falei, né?',
  },
  {
    title: '15/01/2026 — pedido de namoro',
    text: 'Até agora, a melhor decisão da minha vida. Eu amo você. ❤️',
  },
]

export const thingsILoveList: string[] = [
  'Sua risada engasgando',
  'Seu jeito de cuidar',
  'O jeito que você gruda no meu braço',
  'Você parecer a abelinha de vez em quando e o gatinho pidonxo',
  'Sua companhia. (Sério eu amo estar do seu lado)',
  'Sua habilidade no OverCooked',
  'Seu humor PÉSSIMO igual o meu',
  'E o mais importante: A forma como trocamos olhares.',
]

export const finalSurpriseContent: FinalSurpriseContent = {
  eyebrow: 'Fim do cartão, mas não do amor',
  title: 'Tem mais coisa ainda, acredita?',
  buttonLabel: 'Clique aqui para uma última coisa',
  message:
    'Espero que tenha gostado da minha cartinha, amor, eu fiz com carinho. Eu quero que saiba que esses têm sido os melhores (quase 5 ou 9) meses da minha vida. Eu amo dividir meus dias com você. Amo dividir minha vida com você. Eu amo tudo em você. Entre nossos altos e baixos, tapas e beijos (muitos tapas hehe) a gente se resolve, porque somos duas pessoas que se amam muito e isso é mais importante do que qualquer coisa. Você é meu primeiro e último pensamento todos os dias. Hoje é o primeiro dia do resto das nossas vidas juntos. De uma coisa eu tenho certeza: Você vai ser a minha esposa e a mãe dos meus filhos. Além de todas as coisinhas fofas, eu tenho que comentar que eu gosto muito de você sabe o que (sério, gosto muito de fazer isso olhando no seu olho). Toda nossa relação começou com um olhar, e é a coisa que mais temos que fazer sempre. Eu amo você, Giovanna. Espero que fique feliz com seu presente. Te amo demais, gatinha beijo na bunda 😘',
  signature: 'Com amor, Cauê.',
}
