// const app = require('express')();
const express = require('express'); // load express package
const path = require('path')

const app = express() // start the express server
const port = 3000 // defining my server port
// console.log(__dirname)
// app.use(express.static('public')) // use the 'public' folder as the reference point for all static files//
app.use('/', express.static(path.join(__dirname, 'public')))

// defining my home route 
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/test.html`)
})

// defining my about route 
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/public/about.html`)
})

// defining my contact route 
app.get('/contact-us', (req, res) => {
    res.send('Contact page')
})

// defining my contact route 
app.get('/careers', (req, res) => {
    res.send('Careers page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})