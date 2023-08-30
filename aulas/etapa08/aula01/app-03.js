const randomNumbers = [33, 99, 37, 56]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)


const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const usersPremium = users.filter(({ premium }) => premium)