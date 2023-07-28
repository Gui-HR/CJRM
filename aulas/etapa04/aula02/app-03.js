let user = {
    name: 'Guilherme',
    age: 19,
    email: 'guilhermehuertar@gmail.com',
    city: 'Cambui - MG',
    dogs: ['Trufa', 'Fini'],
    login () {
        console.log('Usuario Logado!')
    },
    logout () {
        console.log('Usuario Deslogado!')
    },
    logDogs () {
        console.log(`${this.name} tem os seguintes cachorros:`)

        this.dogs.forEach(dog => {
            console.log(dog)
        })
    }
}

user.login()
user.logout()
user.logDogs()