const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status) {
        console.log(request.responseText)
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()