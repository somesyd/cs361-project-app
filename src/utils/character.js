function getCharacters(egoData, characterData) {
    var characters = {}
    if (!egoData) {
        characters.dreamego = { error: 'The dream ego was not present in this dream.'}
    } else {
        characters.dreamego = egoData
    }
    if (!characterData) {
        characters.figures = { error: 'Processing could not determine other figures in this dream.'}
    } else {
        characters.figures = characterData
    }
    return characters
}

module.exports = { getCharacters }