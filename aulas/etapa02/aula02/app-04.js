const password = 'guilherme'

if(password.length >= 8 && password.includes('g')) {
    console.log('Primeiro acesso concedido')
}

if(password.length >= 8 || password.includes('g')) {
    console.log('Segundo acesso concedido')
}