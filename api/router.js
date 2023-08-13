const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const bcrypt = require('bcryptjs'); 
const salt = bcrypt.genSaltSync(10);
const User = require('./models/user')
const jwt = require('jsonwebtoken');
const cookie = require('cookie');


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
 
router.post('/blog', upload.single('file'), (req, res)=>{
    res.json(files, req.file)
})

module.exports = router;