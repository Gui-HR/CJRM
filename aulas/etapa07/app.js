const correctAnswers = ['B', 'B', 'B', 'B']

const form = document.querySelector('.quiz-form')

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]
    console.log('userAnswers:',userAnswers)

    let test = 0

    userAnswers.forEach((answer, index) => {
            test ++
        console.log(answer)
        console.log(correctAnswers[index])
        console.log(form)
    })

    console.log(test)
})



// })

// let score = 0

//     userAnswers.forEach((answer, index) => {
//         if(answer === correctAnswers[index])
//         score += 25
//     })

//     console.log(score)