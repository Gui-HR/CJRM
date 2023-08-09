const h1 = document.querySelector('h1')
const link = document.querySelector('a')
const paragraph = document.querySelector('p')

link.setAttribute('href', 'https://www.youtube.com/watch?v=jfKfPfyJRdk')
link.setAttribute('target', '_blank')
link.innerText = 'Lofi hip-hop'

paragraph.setAttribute('class', 'success')
paragraph.setAttribute('style', 'color: gray')

const div = document.querySelector('div')

div.innerText = 'Vagabundo'

console.log(div)

