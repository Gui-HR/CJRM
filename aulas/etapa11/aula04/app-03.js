
const getData = endPoint => {
    return new Promise((resove, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            const isRequestOk = request.readyState === 4 && request.status === 200
            const isRequestNotOk = request.readyState === 4

            if(isRequestOk) {
                const data = JSON.parse(request.responseText)
                resove(data)
            }

            if(isRequestNotOk) {
                const errorMessage = 'Os dados não foram encontrados'
                reject(errorMessage)
            }
        })

        request.open('GET', endPoint)
        request.send()
    })
}

getData('https://pokeapi.co/api/v2/pokemon/noibat')
    .then(noibat => {
        console.log(noibat)
        return getData('https://pokeapi.co/api/v2/pokemon/noivern')
    })
    .then(noivern => {
        console.log(noivern)
        return getData('https://pokeapi.co/api/v2/pokemon/ditto')
    })
    .then(console.log)
    .catch(value => console.log(value))


// const getData = () => {
//     return new Promise((resolver, reject) => {
//         resolver('Deu certo')
//         reject('Não deu certo')
//     })
// }

// getData()
//     .then(value => console.log(value))
//     .catch(value => console.log(value))

