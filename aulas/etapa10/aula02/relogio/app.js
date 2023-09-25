const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    const HTMLContent = `
    <span class="clock">${String(hours).length < 2 ? `0${hours}` : hours}</span> :
    <span class="clock">${String(minutes).length < 2 ? `0${minutes}` : minutes}</span> :
    <span class="clock">${String(seconds).length < 2 ? `0${seconds}` : seconds}</span>`

    clockContainer.innerHTML = HTMLContent
    
}

setInterval(updateClock, 1000)