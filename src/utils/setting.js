const gsearch = require('./gsearch')

const CALL_IMAGES = true
const MAX_NUM_IMAGES= 6

async function getSetting(longSettings, shortSettings) {
    var setting = {}
    if (longSettings !== undefined && longSettings !== null) {
        setting.text = longSettings
        if (shortSettings !== undefined && shortSettings !== null) {
            shortSettings = pickSettings(shortSettings)
            const imageDistribution = setImageNumberPerPhrase(shortSettings, MAX_NUM_IMAGES)
            // CALL_IMAGES can turn off Google Custom Search if close to limit
            if (CALL_IMAGES) {
                const settingImages = await gsearch.getGoogleImages(imageDistribution)
                setting.photos = settingImages
            } else {
                setting.photos = null
            }        
        } else {
            setting.photos = null
        }   
    } else {
        setting.error = 'No dream setting information was retrieved.'
    }
    return setting
}

function distributeElements(total, divider) {
    var distribution = []
    // get more or less even distribution of elements as list
    while (total > 0 && divider > 0) {
        var result = Math.ceil(total / divider)
        total -= result
        divider--
        distribution.push(result)
    }
    return distribution
}

function setImageNumberPerPhrase(phraseList, totalNum) {
    const list = []
    if (phraseList.length < totalNum) {
        const distribution = distributeElements(totalNum, phraseList.length)
        // assign distribution to the phrases
        for (let i = 0; i < phraseList.length; i++) {
            list.push({ string: phraseList[i], num: distribution[i]})
        }
    } else {
        for (let i = 0; i < phraseList.length; i++) {
            list.push({ string: phraseList[i], num: 1})
        }
    }
    return list
}

function getDescriptivePhrases(list) {
    var descriptive = []
    // adds strings with whitespace to descriptive
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes(' ')) {
            descriptive.push(list[i])
        }
    }
    return descriptive
}

function padSettingDescriptions(descriptions, fullList, totalNum) {

    if (descriptions.length < totalNum) {
        // remove descriptions strings from fullList
        fullList = fullList.filter((item) => !descriptions.includes(item))

         var shuffledList = fullList.sort(() => 0.5 - Math.random())

         while (descriptions.length < totalNum && shuffledList.length > 0) {
             descriptions.push(shuffledList.pop())
         }
    }
    return descriptions
}

function trimSettingDescriptions(descriptions, totalNum) {
    // shuffle the list
    descriptions.sort(() => 0.5 - Math.random())
    while (descriptions.length > totalNum) {
        descriptions.pop()
    }
    return descriptions
}

function pickSettings(list) {

    var descriptive = getDescriptivePhrases(list)

    if (descriptive.length < MAX_NUM_IMAGES) {
        descriptive = padSettingDescriptions(descriptive, list, MAX_NUM_IMAGES)
    }

    if (descriptive.length > MAX_NUM_IMAGES) {
        descriptive = trimSettingDescriptions(descriptive, MAX_NUM_IMAGES)
    }

    return descriptive
}

module.exports = {
    getSetting: getSetting
}