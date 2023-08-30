const numbers = [3, 5, 7, 9]

const sumNumbers = numbers.reduce((accumulator, number) => accumulator + number, 0)

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

const rogerScore = phaseScores.reduce((accumulator, { name, score }) => {
  if(name === 'Roger Melo') {
    accumulator += score
    }

    return accumulator
}, 0)