const getRequest = (endPoint, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequestNotOk = request.readyState === 4

        if(isRequestOk) {
            const data = JSON.parse(request.responseText)
            callback(null, data)
            return
        }

        if(isRequestNotOk) {
            const errorMessage = 'Os dados não foram encontrados'
            callback(errorMessage, null)
        }
    })

    request.open('GET', endPoint)
    request.send()
}

getRequest('./todos.json', (error, data) => {
    console.log(data)
    getRequest('./todos-02.json', (error, data) => {
        console.log(data)
        getRequest('./todos-03.json', (error, data) => {
            console.log(data)
        })
    })
})