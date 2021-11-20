const axios = require('axios')
const graphs = require('./graphs')

const GRAPH_SERVICE_URL = 'https://analytics-app-361.herokuapp.com/graphs_ms' // Spencer Wagner's service

async function getSentimentAnalysis(sentiment, docSentiment) {
    var sentimentAnalysis = {}
    if (sentiment !== undefined && sentiment !== null) {
        // format data
        const sentimentScatterPlotData = formatSentimentData(sentiment,
            graphs.general_sentiment)
        const docPiePlotsData = formatDocPieData(docSentiment, graphs.doc_graphs)
        
        // build list of graph requests
        const graphRequests = [
            getGraphRequest(sentimentScatterPlotData),
            getGraphRequest(docPiePlotsData.doc_polarity),
            getGraphRequest(docPiePlotsData.doc_emotion)
        ]

        // get charts from Spencer's service
        const [sentimentGraphFile, docPolarityPieFile, docEmotionPieFile] = await sendRequests(graphRequests)

        sentimentAnalysis.scatter = sentimentGraphFile
        sentimentAnalysis.polarity = docPolarityPieFile
        sentimentAnalysis.emotion = docEmotionPieFile

    } else {
        sentimentAnalysis.error = 'There was not enough data to complete sentiment analysis'
    }
    return sentimentAnalysis
}


async function getShadow(sentiment) {
    var shadow = {}

    if (sentiment !== undefined && sentiment !== null) {
        const shadowData = getShadowData(sentiment)
        const shadowScatterPlotData = formatSentimentData(shadowData, graphs.shadow_graph)
        shadow.meter = await sendGraphRequest(shadowScatterPlotData)
        shadow.words = getShadowWords(shadowData)
    } else {
        shadow.error = 'No shadow elements were found.'
    }
    return shadow
}

function getShadowData(data) {
    const shadow = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][1] < 0) {
            shadow.push(data[i])
        }
    }
    return shadow
}

function getShadowWords(shadowData) {
    var shadowList = []
    for (let i = 0; i < shadowData.length; i++) {
        shadowList.push(shadowData[i][0])
    }
    return shadowList
}

// graphObj = { graph_type, colors, xaxis, yaxis, xlabel, ylabel, title }
function formatSentimentData(data, graphObj, pol=1, subj=2) {
    table = []
    for (let i = 0; i < data.length; i++) {
        point = {
            polarity: data[i][pol],
            subjectivity: data[i][subj]
        }
        table.push(point)
    }
    graphObj.table = table
    
    return graphObj
}

function formatDocPieData(data, graphObjs) {
    let [pos, neg] = [0, 0]
    console.log('data: ', data)
    let polarity = Math.round(data[0] * 100)
    if (polarity < 0) {
        pos = 200 - (Math.abs(polarity) + 100)
        neg = 200 - pos
    } else {
        pos = polarity + 100
        neg = 200 - pos
    }
    polarity_table = [
        {
            polarity: "positive",
            proportion: pos
        },
        {
            polarity: "negative",
            proportion: neg
        }
    ]
    emotion_proportion = Math.round(data[1] * 100)
    emotion_table = [
        {
            subjectivity: "neutral",
            proportion: 100 - emotion_proportion 
        },
        {
            subjectivity: "emotion",
            proportion: emotion_proportion
        }
    ]
    graphObjs.doc_polarity.table = polarity_table
    graphObjs.doc_emotion.table = emotion_table

    return graphObjs 
}

function getGraphRequest(graphObj) {
    return axios.post(GRAPH_SERVICE_URL, graphObj)
}

async function sendGraphRequest(graphObj) {
    return await axios.post(GRAPH_SERVICE_URL, graphObj)
    .then((res) => {
        return res.data
    }).catch ((error) => {
        console.log(error.response.status)
    }) 
}

async function sendRequests(requestList) {
    var responseData = []
    
    const responses = await axios.all(requestList)
        .then(axios.spread((...responses) => {
            for (let i = 0; i < responses.length; i++) {
                responseData.push(responses[i].data)
            }
            return
        })).catch((error) => {
            console.log(error.responses.status)
            return
        })
    return responseData
}

module.exports = {
    getSentimentAnalysis,
    getShadow
}