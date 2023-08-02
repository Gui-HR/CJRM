/*
  01

  - Utilize o array abaixo para exibir no console uma string com a seguinte  
    formatação:
  
  Segundo o site Omelete, os melhores filmes de 2019 são:
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
  
  - Todos os filmes e diretores do array devem constar na lista.
*/
console.log('Exercício 01\n')

const best2019Movies = [
  { title: 'Parasita', directedBy: 'Bong Joon-ho' },
  { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
  { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
  { title: 'Entre Facas e Segredos', directedBy: 'Rian Johnson' },
  { title: 'Turma da Mônica: Laços', directedBy: 'Daniel Rezende' },
  { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
  { title: 'Klaus', directedBy: 'Sergio Pablos' },
  { title: 'Fora de Série', directedBy: 'Olivia Wilde' },
  { title: 'Shazam', directedBy: 'David F. Sandberg' },
  { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
  { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
  { title: 'A Vida Invisível', directedBy: 'Karim Aïnouz' }
]

let movies2019 = 'Segundo o site Omelete, os melhores filmes de 2019 são:'

const generateMovieMessge = movie => {
  const movieName = movie.title
  const movieDirector = movie.directedBy

  movies2019 += `\n -${movieName}, dirigido por ${movieDirector}`
}

best2019Movies.forEach(generateMovieMessge)

console.log(movies2019)
console.log('----------------------')

/*
  02

  - No objeto abaixo, implemente um método que exibe a seguinte mensagem no 
    console:

    Vídeos recentes de Roger Melo:
    Introdução ao TDD - Parte 02 | JavaScript | Jest
    Introdução ao TDD | JavaScript | Jest
    Higher-order Functions | JavaScript
  
  - As 4 linhas da mensagem, podem ser exibidas separadamente.
*/
console.log('Exercício 02\n')

const youtubeUser = {
  name: 'Roger Melo',
  chanelUrl: 'https://www.youtube.com/channel/UCmjDevp9Y8r-qi-xueD3Izg',
  videos: {
    total: 111,
    recentVideos: [
      { title: 'Introdução ao TDD - Parte 02 | JavaScript | Jest', length: '28:28' },
      { title: 'Introdução ao TDD | JavaScript | Jest', length: '19:29' },
      { title: 'Higher-order Functions | JavaScript', length: '47:38' }
    ]
  },
  about: {
    description: '🔥 Ensino as pessoas a alcançarem a fluência em JavaScript! 🔥',
    socialNetworks: {
      twitter: 'https://twitter.com/rogermelodev',
      gitHub: 'https://github.com/Roger-Melo'
    },
    country: 'Brasil'
  },
  showLastVideos () {
    let lastVideos = `Vídeos recentes de ${this.name}:`

    this.videos.recentVideos.forEach(video => {
      const videotitle = video.title
      lastVideos += `\n${videotitle}`
    })

    console.log(lastVideos)
  }
}

youtubeUser.showLastVideos()

console.log('----------------------')

/*
  03

  - Exiba o valor do PI no console.
*/
console.log('Exercício 03\n')

console.log(Math.PI)
console.log('----------------------')

/*
  04

  - Arredonde o número que a constante abaixo armazena para 9 e exiba-o no  
    console.
*/
console.log('Exercício 04\n')

const firstNumber = 8.3
const firstNumberRounded = Math.ceil(firstNumber)

console.log(firstNumberRounded)
console.log('----------------------')

/*
  05

  - Arredonde o número que a constante abaixo armazena para 4, utilizando a  
    forma padrão, e exiba-o no console.
*/
console.log('Exercício 05\n')

const secondNumber = 3.5
const secondNumberRounded = Math.round(secondNumber)

console.log(secondNumberRounded)
console.log('----------------------')

/*
  06

  - Arredonde o número que a constante abaixo armazena para 8 e exiba-o no  
    console.
*/
console.log('Exercício 06\n')

const thirdNumber = 8.9
const thirdNumberRounded = Math.floor(thirdNumber)

console.log(thirdNumberRounded)
console.log('----------------------')

/*
  07

  - Exiba no console o número abaixo com a parte decimal removida.
*/
console.log('Exercício 07\n')

const fourthNumber = 5.5
const fourthNumberRounded = Math.trunc(fourthNumber)

console.log(fourthNumberRounded)
console.log('----------------------')

/*
  08

  - A cada vez que o index.html for carregado, exiba no console um número  
    aleatório de 0 à 10, incluindo 0 e 10.
*/
console.log('Exercício 08\n')

const randomDecimalNumber = Math.random()
const randomNumber = Math.round(randomDecimalNumber * 10)

console.log(randomNumber)
console.log('----------------------')