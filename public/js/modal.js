

var modal
var analyzeAgainButton = document.getElementById('new-analysis-button')
var saveContentButton = document.getElementById('save-content')

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

analyzeAgainButton.onclick = () => {
    location.href='/form'
}

saveContentButton.onclick = () => {
    alert('Saving to a document is a pending function.')
}

function displayModal(id) {
    modal = document.getElementById('symbol-modal-' + id)
    modal.style.display = 'block'
}

function closeModal(id) {
    modal = document.getElementById('symbol-modal-' + id)
    modal.style.display = 'none'
}



