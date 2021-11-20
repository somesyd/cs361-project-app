const axios = require('axios')
const url = require('url')
const GOOGLE_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1'


function buildGoogleLinks(settingsList) {
    var GoogleRequests = []

    for (let i = 0; i < settingsList.length; i++) {

        paramsObj = {
            key: process.env.GOOGLE_SEARCH_API_KEY,
            cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
            searchType: 'image',
            safe: 'active',
            imgSize: 'large',
            fileType: 'jpeg',
            imgType: 'photo',
            // rights: 'cc_publicdomain',
            num: settingsList[i].num,
            q: settingsList[i].string
        }
        
        const request = axios.get(GOOGLE_SEARCH_URL, { params: paramsObj })
        GoogleRequests.push(request)
      
    }
    return GoogleRequests
}

function extractImagesFromResponses(responses) {
    var images = []
     // loop through each response
     responses.forEach((res) => {
        const response = res.data.items

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
    
    // REFERENCE: sending multiple requests with axios: https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
    const images = axios.all(googleRequests)
        .then(axios.spread((...responses) => {
            return extractImagesFromResponses(responses) 
               
            })).catch((error) => {
            console.log(error.responses.status)
            return
        })  
    return images
}


module.exports = {
    getGoogleImages: getGoogleImages
}