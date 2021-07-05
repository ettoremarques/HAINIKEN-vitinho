window.onload = function () {
    document.getElementById('comecar').addEventListener('click', function () {
        document.getElementById('comecar').classList.toggle('hidden')
        document.querySelector('.video').classList.toggle('hidden')

        document.querySelector('video').play()
        document.querySelector('audio').play()
        
        setInterval(function () {
            document.querySelector('video').currentTime = 0
            document.querySelector('audio').currentTime = 0
            document.querySelector('video').play()
            document.querySelector('audio').play()
        }, 71100)
    })
}