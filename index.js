window.onload = function () {
    document.getElementById('comecar').addEventListener('click', function () {
        debugger
        document.getElementById('comecar').classList.toggle('hidden')
        document.querySelector('.video').classList.toggle('hidden')

        document.querySelector('video').play()
        document.querySelector('audio').play()
    })
}