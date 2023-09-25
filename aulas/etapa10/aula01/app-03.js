const past = new Date('Jan 09 2006 13:53:00')
const present = new Date()

// console.log(present.toLocaleString())
console.log(present.toDateString())
// console.log(present.getTime())
console.log(past.toDateString())

const diference = present.getTime() - past.getTime()
const seconds = Math.round(diference / 1000)
const minutes = Math.round(seconds / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours / 24)
console.log({ seconds, minutes, hours, days })