// localStorage.setItem('name', 'Guilherme')
// localStorage.setItem('Pokemon', 'Zoroark')

// localStorage.removeItem('obj')

// localStorage.clear()

// const pokemon = localStorage.getItem('Pokemon')
// const name = localStorage.getItem('name')

// console.log(name, pokemon)

// localStorage.clear()

// const myArray = [
//     {a: 1, b: 2, c: 3},
//     {d: 4, e: 5, f: 6},
//     {g: 7, h: 8, f: 9}
// ]

// localStorage.setItem('letters', JSON.stringify(myArray))

const letters = JSON.parse(localStorage.getItem('letters'))

console.log(letters)