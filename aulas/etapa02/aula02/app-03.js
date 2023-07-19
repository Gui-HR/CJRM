const password = '0123'

console.log(password.length)

if(password.length >= 12) {
    console.log('Senha forte')
} else if(password.length >= 8) {
    console.log('Senha fraca')
} else {
    console.log('Sua senha precisa ter pelo menos 8 caracteres')
}