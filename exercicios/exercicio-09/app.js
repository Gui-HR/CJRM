/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/
console.log('Exercicio 01 \n')

// function convertToString (value) {
//   return String(value)
// }

const convertToString = value => String(value)
const number = 35
const numberToString = convertToString(number)

console.log(number, typeof number, numberToString, typeof numberToString)
console.log('--------------------------')

/*
  02

  - Crie uma função que retorne a quantidade de caracteres que uma string  
    recebida por parâmetro possui.
*/
console.log('Exercicio 02 \n')

const stringLength = string => string.length

console.log(stringLength('Aroungueijo'))
console.log('--------------------------')


/*
  03

  - Crie uma função que retorne todos os caracteres de uma string em letras  
    minúsculas;  
  - Utilize a função para exibir a string abaixo no console.

  "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/
console.log('Exercicio 03 \n')

const lowerCase = string => string.toLowerCase()
const sentence = 'CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO'

console.log(lowerCase(sentence))
console.log('--------------------------')

/*
  04

  - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
  - Ao ser invocada, a função deve retornar o index do caractere na string.
*/
console.log('Exercicio 04 \n')

const indexCharacter = (string, character) => string.indexOf(character)

console.log(indexCharacter('Obg russo doido', 'o'))
console.log('--------------------------')

/*
  05

  - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
    passado por argumento existe no array (também passado por argumento).
*/
console.log('Exercicio 05 \n')

const poor = ['Salário mínimo', 'Aluguel', 'SERASA', 'Favela', 'Casa?', 'Mendingo']

const verifyItem = (item, array) => array.includes(item)

console.log(verifyItem('Salário mínimo', poor))
console.log('--------------------------')

/*
  06

  - Crie uma função que retorna a concatenação de 2 arrays, passados como  
    argumentos em sua invocação;
*/
console.log('Exercicio 06 \n')

const rich = ['Dinheiro', 'Empregados', 'Burguês', 'Ferrari', 'Mansão']

const concatenateArray = (firstArray, secondArray) => firstArray.concat(secondArray)

console.log(concatenateArray(poor, rich))
console.log('--------------------------')

/*
  07

  - Crie uma função que retorna o array passado como argumento em sua invocação,  
    mas com o último item removido.
*/
console.log('Exercicio 07 \n')

const games = ['Hollow Knight', 'Enter the Gungeon', 'Celeste', 'Rocket League', 'League of Legens']

const removeLastItem = (array) => {
  array.pop()
  return array
}

console.log(removeLastItem(games))
console.log('--------------------------')

/*
  08

  - Crie uma função que retorna se o valor passado como argumento em sua  
    invocação é null.
*/
console.log('Exercicio 08 \n')

const isANull = value => value === null

console.log(isANull(null))
console.log('--------------------------')

/*
  09

  - Crie uma função que apenas invoca uma função de callback recebida por  
    parâmetro;
  - Crie outra função que apenas exibe seu nome no console;
  - Invoque a função que recebe um callback por parâmetro, passando como  
    argumento a função que exibe seu nome no console e veja se o nome realmente  
    foi exibido.
*/
console.log('Exercicio 09 \n')

const functionInvocator = callback => callback()
const showYourName = () => console.log('Seu nome')

functionInvocator(showYourName)

console.log('--------------------------')

/*
  10

  - Crie uma função que invoca uma função de callback recebida por parâmetro.  
    A invocação da função recebida por parâmetro deve receber um valor como  
    argumento;
  - Crie uma função que retorna o triplo de um número recebido por parâmetro;
  - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
    resulte no triplo de 33.
*/
console.log('Exercicio 10 \n')

const SecondfunctionInvocator = (value, callback) => callback(value)
const tripleValue = value => value * 3

console.log(SecondfunctionInvocator(33 ,tripleValue))
console.log('--------------------------')

/*
  11

  - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;
  
  "O Xº item do array [X, X, X] é X."
*/
console.log('Exercicio 11 \n')

const numbers = [1, 2, 3]
const showNumbersInfo = (item, index, array) => {
  const itemPosition = index + 1
  const itens = array.join(', ')
  console.log(`O ${itemPosition}º item do array [${itens}] é ${item}.`)
}

numbers.forEach(showNumbersInfo)

console.log('--------------------------')

/*
  12

  - Converta o for loop abaixo em um forEach;
  - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
    criada.
*/
console.log('Exercicio 12 \n')

const letters = ['v', 'e', 'p']
let lettersCopy = []

// for (let i = 0; i < letters.length; i++) {
//   lettersCopy.push(letters[i])
// }

letters.forEach(letter => lettersCopy.push(letter))

console.log(lettersCopy)
console.log('--------------------------')

/*
  13

  - Inclua o markup abaixo em seu index.html;
  - Gere um template HTML com parágrafos. Cada parágrafo deve conter um item do  
    array "review";
  - Ao gerar o template, verifique no browser se os parágrafos foram incluídos  
    dentro da section vazia do markup abaixo.

  <article>
    <header>
      <h1>Sobre "Jurassic Park"</h1>
    </header>

    <section data-js="section"></section>
  </article>
*/

// const section = document.querySelector('[data-js="section"]')

const review = [
  'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \o/.',
  'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
  'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
  'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
]

// let paragraphs = ''

// review.forEach( review => {paragraphs += `<p>${review}</p>`})

// section.innerHTML = paragraphs

/*
  14

  - Implemente uma função que retorna uma string com a quantidade de pessoas que  
    curtiram um post, conforme descrito a seguir;
  - A função deve receber por parâmetro um array com os nomes das pessoas que  
    curtiram o post/vídeo/foto;  
  - Se o array recebido estiver vazio, a mensagem que a função deve retornar é  
    "Ninguém curtiu isso";  
  - Se o array conter apenas um nome, como "Rafael", por exemplo, a mensagem  
    retornada deve ser "Rafael curtiu isso";  
  - Se o array conter 2 nomes, a mensagem retornada deve ser  
    "NOME_1 e NOME_2 curtiram isso";  
  - Se o array conter 3 nomes, a mensagem retornada deve ser  
    "NOME_1, NOME_2 e NOME_3 curtiram isso";  
  - Se o array conter 4 ou mais nomes, a mensagem retornada deve ser  
    "NOME_1, NOME_2 e mais X pessoas curtiram isso". O "X" deve ser substituído  
    pelo restante da quantidade de pessoas que curtiram o post (além das duas  
    pessoas já mencionadas no início da mensagem).
*/
console.log('Exercicio 14 \n')

const postLikes = ['Rafael', 'Leonardo', 'Donatelo', 'Mikelangelo']

const showLikes = whoLiked => {
  const howManyLikes = whoLiked.length
  const firstLike = whoLiked[0]
  const secondLike = whoLiked[1]
  const thirdLike = whoLiked[2]

  switch (howManyLikes) {
    case 0:
      console.log("Ninguém curtiu isso")
      break

    case 1:
      console.log(`${firstLike} curtiu isso`)
      break

    case 2:
      console.log(`${firstLike} e ${secondLike} curtiram isso`)
      break

    case 3:
      console.log(`${firstLike}, ${secondLike} e ${thirdLike} curtiram isso`)
      break
    
    default:
      console.log(`${firstLike}, ${secondLike} e mais ${howManyLikes - 2} curtiram isso`)
  }
}

showLikes(postLikes)

