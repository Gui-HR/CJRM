const correctAnswers = ['B', 'B', 'B', 'B']

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const span = result.querySelector('span')

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    let score = 0

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index])
        score += 25
    })

    scrollTo(0,0)

    result.classList.remove('d-none')

    let counter = 0

    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }

        span.textContent = `${counter}%`

        counter++     
    }, 10)
})