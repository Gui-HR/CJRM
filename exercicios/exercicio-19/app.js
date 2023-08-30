/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const correctAnswers = ['B', 'D', 'A', 'C']

const form = document.querySelector('form')
const finalScore = document.querySelector('.final-score')
const finalScoreContainer = document.querySelector('.final-score-container')

const getUserAnswers = () => correctAnswers.map((_, index) => 
    form[`inputQuestion${index + 1}`].value)

const calculateFinalScore = userAnswers => userAnswers.reduce((accumulator, answer, index) => 
    answer === correctAnswers[index] ? accumulator += 25 : accumulator, 0)


const showFinalScore = () => {
    finalScoreContainer.classList.remove('inactive')
    
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

const animateFinalScore = (score) => {
    let counter = 0

    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
    
        finalScore.textContent = `${counter++}%`
    }, 15)
}

const showQuizResult =  event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()
    const score = calculateFinalScore(userAnswers)
    showFinalScore()
    animateFinalScore(score)
}

form.addEventListener('submit', showQuizResult)