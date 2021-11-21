var modal
var analyzeAgainButton = document.getElementById('new-analysis-button')

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

analyzeAgainButton.onclick = () => {
    location.href='/form'
}

function displayModal(id) {
    modal = document.getElementById('symbol-modal-' + id)
    modal.style.display = 'block'
}

function closeModal(id) {
    modal = document.getElementById('symbol-modal-' + id)
    modal.style.display = 'none'
}
