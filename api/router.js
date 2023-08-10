const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const bcrypt = require('bcryptjs'); 
const salt = bcrypt.genSaltSync(10);
const User = require('./models/user')

router.post('/register', async (req, res) => {
    const {email, password} = req.body
    res.json(await User.create({
        email, 
        password: bcrypt.hashSync(password, salt)
    }))
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userDoc = await User.findOne({email})
    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            res.sendStatus(200).json('login')
        } else {
            res.sendStatus(400).json('wrong password')
        }  
    }else{
        res.sendStatus(400).json('the email doesnt exist')
    }
})

router.post('/logout', (req, res)=>{

})

router.post('/blog', upload.single('file'), (req, res)=>{
    res.json(files, req.file)
})

module.exports = router;