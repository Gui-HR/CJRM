const button = document.querySelector('button')
const popup = document.querySelector('.popup-container')
const closeButton = document.querySelector('.popup-closer')
const link = document.querySelector('.popup-link')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classElementClicked = event.target.classList[0]
    const classNames = ['popup-container', 'popup-closer', 'popup-link']
    const shouldClosePopup = classNames.some(className => className === classElementClicked)

    if(shouldClosePopup) {
        popup.style.display = 'none'
    }
    
})