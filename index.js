const express = require('express')
const app = express()
const petsRouter = require('./router/pets')
const bodyParser = require("body-parser"); 

// app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use('/api', petsRouter)

app.listen(3000, () => {
    console.log('Port is listening')
})