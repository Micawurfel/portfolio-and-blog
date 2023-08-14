const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const router = require('./router')
require('dotenv').config()

const app = express()

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser()); 
app.use(express.static(__dirname + '/uploads'));

const url = `mongodb+srv://wurfelmicaela:${process.env.PASSWORD}@cluster0.pcixxmr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url)

app.use('/', router)

app.listen(process.env.PORT, () =>{ 
    console.log(`App listening on port ${process.env.PORT}`)
})
