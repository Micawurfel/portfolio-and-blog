const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const User = require('./models/user')
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
// const bcrypt = require('bcryptjs'); 
// const salt = bcrypt.genSaltSync(10);

const app = express()
PORT = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

PASSWORD = 'ECYskl9jns9iTGoH'
const url = `mongodb+srv://wurfelmicaela:${PASSWORD}@cluster0.pcixxmr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url)

const router = require('./router')
app.use('/', router)

app.listen(PORT, () =>{ 
    console.log(`App listening on port ${PORT}`)
})
