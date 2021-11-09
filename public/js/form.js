var loader = document.getElementById('loader')
var loaderText = document.getElementById('loader-text')
var loaderBox = document.getElementById('loader-box')
var dreamSubmit = document.getElementById('dream-submit')
var body = document.getElementById('main-content-form')

dreamSubmit.onclick = () => {
    loader.style.display = 'block'
    loaderText.style.display = 'block'
    loaderBox.style.display = 'block'
    body.style.opacity = 0.5
}

document.addEventListener('DOMContentLoaded', function() {
    loader.style.display = 'none'
    loaderText.style.display = 'none'
    loaderBox.style.display = 'none'
    body.style.opacity = 1

})