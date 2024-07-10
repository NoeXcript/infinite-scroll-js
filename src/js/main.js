((doc, win) => {
    'use strict'

    const container = doc.querySelector('.container')
    const URL = `https://randomfox.ca/images/`

    function getRandomNumber() {
        return Math.floor(Math.random() * 100)
    }

    function loadImages(numImages = 6) {
        let i = 0;
        while (i < numImages) {
            const img = doc.createElement('img')
            img.src = `${URL}${getRandomNumber()}.jpg`
            container.appendChild(img)
            i++
        }
    }
    loadImages()

    win.addEventListener('scroll', () => {
        if (win.scrollY + win.innerHeight >= doc.documentElement.scrollHeight) {
            loadImages()
        }
    })
})(document, window)