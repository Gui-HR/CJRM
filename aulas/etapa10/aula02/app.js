const present = new Date()
const past = new Date('Feb 18 2004 12:00:00')

console.log(dateFns.format(present, 'DD/MM/YYYY'))
console.log(dateFns.distanceInWords(present, past, { addSuffix: true}))
