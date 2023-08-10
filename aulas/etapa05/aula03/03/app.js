const lis = document.querySelectorAll('li')

lis.forEach((li) => {
    li.addEventListener('click', event => {
        const clickedElement = event.target

        clickedElement.remove()
    })
})

const button = document.querySelector('button')
const ul = document.querySelector('ul')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    
    li.textContent = 'Estudar ingles'
    li.addEventListener('click', (event) => {
        event.target.remove()
    })

    ul.append(li)    
}) 