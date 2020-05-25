const express = require('express')
const router = express.Router()
const {User} = require('../models/user')

router.post('/', async(req, res)=>{
    let user = await User.findOne({email:req.body.email})
    if(user) return res.status(400).send('Este usuario ya esta registrado en el portal')
    user =new User({
        
    })
})