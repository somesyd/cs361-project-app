const path = require('path')  // Core node module
const express = require('express') 
const dotenv = require('dotenv').config()
const hbs = require('hbs')
const data = require('./utils/data')

const app = express()   // express is a function, so we have to start it up
const port = process.env.PORT || 31474 

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')   // hbs --> npm handlebars module that integrates with express 
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.get('/content', (req, res) => {
    const context = {
        dreamtext: data.dreamText.dream,
        settingtext: data.settingText.textList,
        settingphotos: data.settingPhotos.files,
        characters: data.characters,
        suggest: data.suggest,
        symbol: data.symbols,
        shadow: data.shadow,
        motif: data.motifs
    }
    res.render('content', context)
})

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Sydney Somerfield'
//     })
// })

// start the server listening
app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})