const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearch = document.querySelector('.form-search input')


const addNewTodo = valueAddInput => {
    if(valueAddInput) {
        todosContainer.innerHTML += 
        `<li class="list-group-item d-flex justify-content-between align-items-center hidden" data-text="${valueAddInput.toLowerCase()}">
            <span>${valueAddInput}</span>
            <i class="far fa-trash-alt delete" data-link="${valueAddInput.toLowerCase()}"></i>
        </li>`
    }
}

const removeTodo = clickedElement => {
    const isAIcon = clickedElement.nodeName === 'I'
    const trashDataValue = clickedElement.dataset.trash

    if(isAIcon) {
        document.querySelector(`[data-text="${trashDataValue}"]`).remove()
    }
}

const filterTodos = (todoList, search, boolean) => {
    return todoList.filter(todo => boolean ? todo.dataset.text.includes(search) : !todo.dataset.text.includes(search))
}

const hideAllTodos = (todoList, search) => {
    filterTodos(todoList, search, false).forEach(todo => {
        todo.classList.remove('d-flex')
    })
}

const showFilteredTodos = (todoList, search) => {
    filterTodos(todoList, search, true).forEach(todo => {
        todo.classList.add('d-flex')
    })
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const valueAddInput = event.target.add.value.trim()
    addNewTodo(valueAddInput)

    event.target.reset()
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
})

inputSearch.addEventListener('input', event => {
    const search = event.target.value.toLowerCase().trim()
    const todoList = Array.from(document.querySelectorAll('li'))
    
    hideAllTodos(todoList, search)
    showFilteredTodos(todoList, search)
})