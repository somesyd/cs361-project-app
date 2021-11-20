var demoBox = document.getElementById('demo-choice')
var exploreBox = document.getElementById('explore-choice')
var loader = document.getElementById('loader')
var loaderText = document.getElementById('loader-text')
var loaderBox = document.getElementById('loader-box')
var body = document.getElementById('main-content')


demoBox.onclick = () => {
    location.href='/demo'
    loader.style.display = 'block'
    loaderText.style.display = 'block'
    loaderBox.style.display = 'block'
    body.style.opacity = 0.5
}

exploreBox.onclick = () => {
    location.href='/form'
}

window.addEventListener("pageshow", function () {
    loader.style.display = 'none'
    loaderText.style.display = 'none'
    loaderBox.style.display = 'none'
    body.style.opacity = 1
  });

document.addEventListener('DOMContentLoaded', function () {
    loader.style.display = 'none'
    loaderText.style.display = 'none'
    loaderBox.style.display = 'none'
    body.style.opacity = 1
})
