const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const User = require('./models/user')

const bcrypt = require('bcryptjs'); 
const salt = bcrypt.genSaltSync(10);

const app = express()
PORT = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

PASSWORD = 'SOnY5yDFeokNsUgk'
const url = `mongodb+srv://blog-admin:${PASSWORD}@cluster0.tvxy86v.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url)

app.post('/register', async (req, res) => {
    const {email, password} = req.body
    res.json(await User.create({
        email, 
        password: bcrypt.hashSync(password, salt)
    }))
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userDoc = await User.findOne({email})
    const passOk = bcrypt.compareSync(password, userDoc.password);
    // if (passOk) {
    //     console.log('login')
    // } else {
    //     console.log('incorrect')
    // }
})

app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`)
})
