const myFunc = function(callBack) {
    const message = 'Participe agora do Urubu do Pix!'

    callBack(message)
}

const jogoDoBicho = function(message) {
    console.log(message)
}

myFunc(jogoDoBicho)

const bet = ['Macaco', 'Morsa', 'Ovelha', 'Lêmuri', 'Penguim']

const betInfo = (item, index, array) => console.log(item, index, array)

bet.forEach(betInfo)