const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok) {
            throw new Error('Não foi possivel obter os dados solicitados.')
        }

        return response.json()
    } catch(error) {
        console.log(error.message)
    }
}

const showUsers = async () => {
    const users = await getUsers()
    console.log(users)
    console.log('cabide')
}

showUsers()

console.log('chuveiro')