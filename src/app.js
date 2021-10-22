const path = require('path')  // Core node module
const express = require('express') 
const dotenv = require('dotenv').config()
const hbs = require('hbs')

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

app.get('/explore', (req, res) => {
    res.render('explore')
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