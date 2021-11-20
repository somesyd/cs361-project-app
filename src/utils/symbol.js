const axios = require('axios')
const WIKI_SCRAPER_URL = 'https://wiki-scraper-331405.uc.r.appspot.com' // David Ju's service

const MAX_SYMBOLS = 6

async function getSymbols(symbolsList) {
    if (symbolsList !== undefined && symbolsList !== null) {
        symbolList = shuffleSymbols(symbolsList)
        symbolList = symbolsList.filter(s => s != 'dream')
        symbolsResponse = await getWikipediaData(symbolList)
        const symbols = createSymbolObjs(symbolsResponse)
        return { list: symbols }
    } else {
        return { error: 'No symbols were identified from the text.'}
    } 
}

function shuffleSymbols(list) {
    if (list.length <= MAX_SYMBOLS) {
        return list
    } else {
        const shuffledList = list.sort(() => 0.5 - Math.random())
        return shuffledList
    }
}

function createSymbolObjs(symbolsWikiDataList) {
    var list = []

    for (let i = 0; i < symbolsWikiDataList.length; i++) {

        // create an object for each symbol in the list
        let summary = null
        let image = null
        const data = symbolsWikiDataList[i][0].data
        if (data.hasOwnProperty('summary')) {
            summary = data.summary
            image = symbolsWikiDataList[i][1].data.image_url
        } else {
            image = data.image
            summary = symbolsWikiDataList[i][1].data.summary
        }

        const obj = {
            id: i,
            name: data.title,
            image: image,
            text: summary
        }

        list.push(obj)
    }
    return list
}

function buildWikiLinks(symbol) {
    function buildUrl(element, type) {
        return WIKI_SCRAPER_URL  + '/' + element + '/' + type
    }
    // format string spaces for url
    symbol.split(' ').join('%20')
   
    const summary = buildUrl(symbol, 'summary')
    const img = buildUrl(symbol, 'image')

    return [summary, img]
}

/* DAVID's Microservice Calls */
async function getWikipediaData(symbolList) {
  
    let maxSymbols = MAX_SYMBOLS
    if (symbolList.length < 6) {
        maxSymbols = symbolList.length
    }
    // loop requests until there are 6 complete symbols OR until list runs out
    var responseList = []
    let count = 0
    while (symbolList.length > 0 && count < maxSymbols) {

        const next = symbolList.pop()

        // create the image and summary request urls
        const links = buildWikiLinks(next)

        // send the urls
        const response = await axios.all(links.map(l => axios.get(l)))
            .then(axios.spread(function (...res) {
                responseList.push(res)
                count ++
                // console.log(res[0].data)
                // console.log(res[1].data)
                return
            })).catch ((error) => {
                console.log(error.response.status)
            })
    }   
    return responseList         
}

module.exports = {
    getSymbols: getSymbols
}