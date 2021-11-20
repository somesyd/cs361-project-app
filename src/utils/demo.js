const data = require('./data')

function getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectADream() {
    const dreamNum = getRandomIntBetween(0, data.sample_dreams.list.length)
    const dreamObj = data.sample_dreams.list[dreamNum]
    return dreamObj
}

module.exports = {
    selectADream
}