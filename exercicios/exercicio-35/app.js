/*
  01

  - Implemente uma função que recebe o nome da key de um item da localStorage 
    e retorna o valor da key parseado para objeto javascript.
*/

const pokemons = [
  {name: 'Zoroark', dexNumber: 571, gen: 5},
  {name: 'Froakie', dexNumber: 656, gen: 6},
  {name: 'Oshawott', dexNumber: 501, gen: 5}
]

localStorage.setItem('Pokemons', JSON.stringify(pokemons))

const getAndParseItem = keyName => JSON.parse(localStorage.getItem(keyName))

console.log(getAndParseItem('Pokemons'))

/*
  02

  - Mesmo com um input type="number", a expressão `event.target.value` abaixo 
    resulta em uma string;
  - Exiba, no console, o valor que foi inserido no input;
  - O exibido valor deve ser do tipo number;
  - Não utilize a invocação da Number() ou qualquer outro método que converta 
    strings em number.

  Dica: pesquise por valueAsNumber.
*/

const input = document.querySelector('[data-js="input"]')

input.addEventListener('input', event => {
  console.log(event.target.valueAsNumber)
})

/*
  03

  - Implemente uma função 'combineOperations' que recebe 2 parâmetros:
    - Um valor inicial, do tipo number;
    - Um array de funções.
  - A combineOperations deve: 
    - Passar o valor inicial para a 1ª função do array;
    - Passar o valor retornado pela invocação da 1ª função para a 2ª função, e 
      assim por diante. Até que cada função do array tenha sido invocada;
    - Retornar o valor que a invocação da última função do array retornou.
  - Descomente o código abaixo. A primeira invocação da combineOperations deve 
    retornar 60 e a segunda invocação, 10.
*/

function add100 (num) {
  return num + 100
}

function divByFive (num) {
  return num / 5
}

function multiplyByThree (num) {
  return num * 3
}

function multiplyFive (num) {
  return num * 5
}

function addTen (num) {
  return num + 10
}

const combineOperations = (number, funcArray) => 
  funcArray.reduce((acc, func) => acc = func(acc), number)

console.log(combineOperations(0, [add100, divByFive, multiplyByThree]))
console.log(combineOperations(0, [divByFive, multiplyFive, addTen]))

/*
  04

  - O código abaixo não está funcionando. Descubra o que ele está tentando 
    fazer e refatore-o.
*/

const albums = [
  {
    id: 537,
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: 59.90,
    genre: 'Progressive Rock'
  },
  {
    id: 975,
    title: 'Houses of the Holy',
    artist: 'Led Zeppelin',
    price: 81.00,
    genre: 'Rock'
  },
  {
    id: 359,
    title: 'Heaven and Hell',
    artist: 'Black Sabbath',
    price: 49.90,
    genre: 'Heavy metal'
  }
]

const searchAlbum = {
  id: 975,
  title: 'Houses of the Holy',
  artist: 'Led Zeppelin',
  price: 81.00,
  genre: 'Rock'
}

const searchAlbumExist = albums.some(album => album.id === searchAlbum.id)

if (searchAlbumExist) {
  console.log(`${JSON.stringify(searchAlbum)} existe no array albums.`)
}

/*
  05

  - Baseado no que foi mostrado na aula passada, faça uma cópia do `obj`.
*/

const obj = {
  prop1: 'a',
  prop2: 'b',
  prop3: null,
  prop4: true,
  prop5: false,
  prop6: [9, { x: 1, y: 2 }],
  prop7: 7,
  prop8: { a: 'x', b: 'y' },
}

const objAsJson = JSON.stringify(obj, null, 2)

const objCopy = JSON.parse(objAsJson)

console.log(objCopy)

/*
  06

  - Implemente uma função que cria e retorna um elemento HTML;
  - Ela deve receber o nome do elemento HTML a ser criado e um objeto com os 
    atributos que o elemento deve conter;
  - A quantidade de atributos que o elemento irá conter pode variar.

  Dica: pesquise por Object.entries.
*/

const attributes = {
  class: 'quadrado',
  id: 'n-sei',
  'data-js': 'teste'
}

const createHtmlElement = (element, attributes) => {
  const createdElement = document.createElement(element)
  const att = Object.entries(attributes)

  att.forEach(([ attributeName, value ]) => createdElement.setAttribute(attributeName, value))

  return createdElement
}

createHtmlElement('div', attributes)

/*
  07

  - Na weather app, faça com que quando o usuário recarregar a página ou sair 
    da aplicação e voltar, as informações da última cidade pesquisada sejam 
    exibidas na interface.
*/
