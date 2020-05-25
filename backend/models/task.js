const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema =new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    schedule:{
        type:Number
    },
    password:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now

    }
})