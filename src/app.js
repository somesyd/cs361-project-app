const path = require('path')  // Core node module
const express = require('express') 
const dotenv = require('dotenv').config()
const hbs = require('hbs')
const data = require('./utils/data')
const dreamservice = require('./utils/dreamservice')

const app = express()   // express is a function, so we have to start it up
const port = process.env.PORT || 40404 

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')   // hbs --> npm handlebars module that integrates with express 
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



app.post('/processing', (req, res) => {
 
    dreamservice.getDreamData(req.body.dreamtext)
        .then((dreamData) => {
   
            const context = {
                dreamtext: req.body.dreamtext,
                setting: dreamData.setting,
                characters: dreamData.characters,
                suggest: data.suggest,
                symbol: dreamData.symbols,
                shadow: null,
                motif: null
            }
            res.render('content', context)
        }).catch((error) => {
            console.log(error)
        })
})



// start the server listening
app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})