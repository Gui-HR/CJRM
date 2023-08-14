const button = document.querySelector('button')
const lis = document.querySelectorAll('li')
const ul = document.querySelector('ul')

button.addEventListener('click', () => {
    ul.innerHTML += '<li>Estudar inglês</li>'
})

ul.addEventListener('click', event => {
    console.log(event.target)
})