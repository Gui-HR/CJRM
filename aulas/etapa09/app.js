const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearch = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const valueAddInput = event.target.add.value.trim()

    if(valueAddInput) {
        todosContainer.innerHTML += 
        `<li class="list-group-item d-flex justify-content-between align-items-center hidden">
            <span>${valueAddInput}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
    }

    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    const isAIcon = clickedElement.nodeName === 'I'

    if(isAIcon) {
        clickedElement.parentElement.remove()
    }
})

inputSearch.addEventListener('input', event => {
    const search = event.target.value.toLowerCase().trim()

    const searchResult = Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().trim().includes(search))
        .forEach(todo => {
            todo.classList.remove('d-flex')
        })
    
    Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().trim().includes(search))
    .forEach(todo => {
        todo.classList.add('d-flex')
    })
})