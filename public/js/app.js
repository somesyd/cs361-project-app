var modal = null
var closeSpan = document.getElementsByClassName('close')[0]

closeSpan.onclick = function () {
    modal.style.display = 'none'
}

function openModal(id) {
    // modal = document.getElementById(id)
    //placeholder:
    modal = document.getElementById('symbol-modal')
    modal.style.display = 'block'
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

function onLoad() {
    document.addEventListener('DOMContentLoaded', function () {
    
        document.querySelectorAll('.symbol-box').forEach( function (el) {
            el.addEventListener('click', function (event) {
                openModal(event.target.id)
                // alert(event.target.id)
    
            })
        })
    })
}
onLoad()
