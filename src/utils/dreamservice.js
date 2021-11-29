const axios = require('axios')
const setting = require('./setting')
const sentiment = require('./sentiment')
const symbol = require('./symbol')
const character = require('./character')

const DREAM_SERVICE_URL ='https://cs361-parsely-rjg4g6kr7q-uw.a.run.app' // my service

async function getDreamData(text) {
    try {
        const response = await axios.post(DREAM_SERVICE_URL + '/dream', { text: text })

        // call functions to get all dream elements
        const [settingObj, sentimentObj, shadowObj, symbolsObj] = await Promise.all([
            setting.getSetting(response.data.settings, response.data.sub_settings),
            sentiment.getSentimentAnalysis(response.data.sentiment, response.data.doc_sentiment),
            sentiment.getShadow(response.data.sentiment),
            symbol.getSymbols(response.data.symbols)
        ])

        const dreamCharactersObj = character.getCharacters(response.data.ego, response.data.characters, response.data.animals)   
    
        // build the return object for the template context
        const dream = {
            setting: settingObj,
            symbols: symbolsObj,
            characters: dreamCharactersObj,
            shadow: shadowObj,
            sentiment: sentimentObj
        }    
        return dream

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getDreamData
}