const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs'); 
const salt = bcrypt.genSaltSync(10);
const User = require('./models/user')
const PostModel = require('./models/post')
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const multer  = require('multer')

router.post('/register', async (req, res) => {
    const {email, password} = req.body
    res.json(await User.create({
        email, 
        password: bcrypt.hashSync(password, salt)
    }))
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    const emailExist = await User.findOne({email})
    if(emailExist){
        const validPass = bcrypt.compareSync(password, emailExist.password);
        if (validPass) {
            const token = jwt.sign({
                id:emailExist._id, 
                email:emailExist.email 
            }, process.env.TOKEN_SECRET)
            res.cookie('token', token).json({id:emailExist._id})
            // .sendStatus(201)
        } else {
            res.sendStatus(400).json('wrong password')
        } 
    }else{
        res.sendStatus(400).json('the email doesnt exist')
    }
})


router.get('/profile', (req, res) =>{
    const {token} = req.cookies
    if(!token) return res.status(401).json({error: 'no token'})
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        return res.json(verified)
    } catch (error) {
        return res.status(401).json({error: 'invalid token'})
    }
})

router.post('/logout', (req, res)=>{
    const {token} = req.cookies
    if(!token){
        return res.status(401).json({error: 'no token'})
    }else{
        res.clearCookie('token')
        cookie.set('token', {maxAge: 0});
    }
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })

// CREAR NUEVO POST
router.post('/post', upload.single('imagen'), async (req, res)=>{
    const imagen = req.file

    const {title, summary, content} = req.body
    const postDoc = await PostModel.create({
        title,
        summary,
        content,
        file: imagen.filename
    })
    console.log(postDoc)
    res.json(postDoc)
})

// EDITAR POST
router.put('/post/:id',  upload.single('imagen'), async (req, res) =>{
    const {id} = req.params
    const imagen = req.file
    const {title, summary, content} = req.body
    console.log(req.body)

    const postDoc = await PostModel.findByIdAndUpdate(id, {
        title: title,
        summary: summary,
        content: content,
        file: imagen.filename
    })

    res.json(postDoc)
})

// OBTENER TODOS LOS POST
router.get('/post', async (req, res) =>{
    const posts = await PostModel.find()
    res.json(posts)
})

// OBTENER UN POST
router.get('/post/:id', async (req, res) =>{
    const {id} = req.params
    const postDoc = await PostModel.findById(id)
    res.json(postDoc)
})

module.exports = router;