const present = new Date()

console.log('',present)
console.log('GetFullYear',present.getFullYear())
console.log('GetMonth',present.getMonth())
console.log('GetDate',present.getDate())
console.log('GetDay',present.getDay())
console.log('GetHours',present.getHours())
console.log('GetMinutes',present.getMinutes())
console.log('GetSeconds',present.getSeconds())

console.log(present.getTime())

console.log('toDateToString', present.toDateString())
console.log('toTimeString', present.toTimeString())
console.log('toLocaleString', present.toLocaleString())