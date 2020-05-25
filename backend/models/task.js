const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const taskSchema =new mongoose.Schema({

    userId:String,
    value:String,
    status:String,
    date: {type:Date, default: Date.now}

})

const Task = mongoose.model('task',taskSchema)

module.exports = Task
