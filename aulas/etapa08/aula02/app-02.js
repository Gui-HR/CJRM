const strings = ['Jureminha', 'Ortodentista', 'Fiat Uno']

strings.sort()

console.log(strings);

const scores = [5, 25, 10, 30, 45, 60, 30]

scores.sort((number1, number2) => number2 - number1)

console.log(scores)

const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
  ]

theBigFamily.sort((item1, item2) => item1.score - item2.score)

  console.log(theBigFamily)