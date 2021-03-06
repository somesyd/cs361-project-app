const path = require('path') 
const express = require('express') 
const dotenv = require('dotenv').config()
const hbs = require('hbs')
const data = require('./utils/data')
const dreamservice = require('./utils/dreamservice')
const demo = require('./utils/demo')

const app = express() 
const port = process.env.PORT || 40404 

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs') 
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// set up static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.get('/demo', (req, res) => {
    const demoDream = demo.selectADream()
    dreamservice.getDreamData(demoDream.text)
    .then((dreamData) => {
        const context = {
            dreamtext: demoDream.text,
            ref: demoDream.ref,
            setting: dreamData.setting,
            characters: dreamData.characters,
            suggest: data.suggest,
            symbol: dreamData.symbols,
            shadow: dreamData.shadow,
            sentiment: dreamData.sentiment
        }
        res.render('content', context)
    }).catch((error) => {
        console.log(error)
    })
})

app.post('/processing', (req, res) => {
    dreamservice.getDreamData(req.body.dreamtext)
        .then((dreamData) => { 
            const context = {
                dreamtext: req.body.dreamtext,
                setting: dreamData.setting,
                characters: dreamData.characters,
                suggest: data.suggest,
                symbol: dreamData.symbols,
                shadow: dreamData.shadow,
                sentiment: dreamData.sentiment
            }
            res.render('content', context)
        }).catch((error) => {
            console.log(error)
        })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})