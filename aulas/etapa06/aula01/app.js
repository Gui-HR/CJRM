const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(usernameInput.value)
})

const regex = /^[a-zA-Z]{6,}$/
const username = 'Gilerme'
const matchTest = regex.test(username)
const matchSearch = username.search(regex)

console.log(matchTest)
console.log(matchSearch)