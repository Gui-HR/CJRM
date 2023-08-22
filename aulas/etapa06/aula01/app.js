const form = document.querySelector('.signup-form')
const feedback = document.querySelector('p')

const testUsername = (username) => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()

    const isAValidUsername = testUsername(event.target.username.value)

    if(isAValidUsername) {
        feedback.textContent = 'Username valido :3'
        return
    }

    feedback.textContent = 'Username invalido, precisa de apenas caracteres e entre 6 a 12 caracteres.'
})

form.username.addEventListener('keyup', event => {
    const isAValidUsername = testUsername(event.target.value)

    if(isAValidUsername) {
        form.username.setAttribute('class', 'valid')
        return
    }

    form.username.setAttribute('class', 'invalid')
})

// const regex = /^[a-zA-Z]{6,}$/
// const username = 'Gilerme'
// const matchTest = regex.test(username)
// const matchSearch = username.search(regex)

// console.log(matchTest)
// console.log(matchSearch)