const article = document.querySelector('article')

console.log(article.children)
console.log(Array.from(article.children))

Array.from(article.children).forEach( element => {
    element.classList.add('element-article')
})

const title = document.querySelector('h2')

console.log(title.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

