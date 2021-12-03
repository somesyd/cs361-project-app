const axios = require('axios')
const url = require('url')
const GOOGLE_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1'

function buildGoogleLink(num, q) {
    paramsObj = {
        key: process.env.GOOGLE_SEARCH_API_KEY,
            cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
            searchType: 'image',
            safe: 'active',
            imgSize: 'large',
            fileType: 'jpeg',
            imgType: 'photo',
            num: num,
            q: q
    }
    return axios.get(GOOGLE_SEARCH_URL, { params: paramsObj })
}

function buildGoogleLinks(settingsList) {
    var GoogleRequests = []

    for (let i = 0; i < settingsList.length; i++) {

        request = buildGoogleLink(settingsList[i].num, settingsList[i].string)
        GoogleRequests.push(request)
      
    }
    return GoogleRequests
}

function extractImagesFromResponses(responses) {
    var images = []

     // loop through each response
     responses.forEach((res) => {
        const response = res.data.items
        console.log(response)
        // add image link for each item in response
        Object.values(response).forEach((item) => {
            images.push(item.link)
        })
    })
    return images
}


// Google Custom Search API 
async function getGoogleImages(list, numImages) {

    const googleRequests = buildGoogleLinks(list, numImages)
      
    const images = axios.all(googleRequests)
        .then(axios.spread((...responses) => {
            return extractImagesFromResponses(responses) 
               
            })).catch((error) => {
            console.log(error)
            return
        })  
    return images
}



module.exports = {
    getGoogleImages
}