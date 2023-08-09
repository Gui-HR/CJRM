const paragraphs = document.querySelectorAll('p')

const errorOrSuccess = paragraph => {
    if(paragraph.innerText.includes('error')) {
        paragraph.classList.add('error')
    }

    if(paragraph.innerText.includes('success')) {
        paragraph.classList.add('success')
    }
}

paragraphs.forEach(errorOrSuccess)

