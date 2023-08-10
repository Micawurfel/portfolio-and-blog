const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const bcrypt = require('bcryptjs'); 
const salt = bcrypt.genSaltSync(10);

const app = express()
PORT = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

PASSWORD = 'ECYskl9jns9iTGoH'
const url = `mongodb+srv://wurfelmicaela:${PASSWORD}@cluster0.pcixxmr.mongodb.net/?retryWrites=true&w=majority`
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
    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            res.sendStatus(200)
            console.log('correct')
        } else {
            res.sendStatus(400)
            console.log('wrong')
        }  
    }else{
        res.sendStatus(400)
        console.log('the email doesnt exist')
    }
})

app.post('/blog', upload.single('file'), (req, res)=>{
    res.json(files, req.file)
})

app.listen(PORT, () =>{ 
    console.log(`App listening on port ${PORT}`)
})
