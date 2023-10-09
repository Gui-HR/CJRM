// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(console.log)
// .catch(error => console.log(error))

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/userso')
    return await response.json()
}

const logUsers = async () => {
    const users = await getUsers()
    console.log(users)
}

logUsers()