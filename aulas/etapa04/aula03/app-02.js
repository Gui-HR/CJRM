let user = {
    name: 'Guilherme',
    age: 19,
    email: 'guilhermehuertar@gmail.com',
    city: 'Cambui - MG',
    dogs: [
        {name: 'Trufa', age: 7},
        {name: 'Fini', age: 4}
    ],
    login () {
        console.log('Usuario Logado!')
    },
    logout () {
        console.log('Usuario Deslogado!')
    },
    logDogs () {
        console.log(`${this.name} tem os seguintes cachorros:`)

        this.dogs.forEach(dog => {
            console.log(dog.name, dog.age)
        })
    }
}

user.logDogs()