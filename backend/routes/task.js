const express = require('express')
const router = express.Router()
const Task = require('../models/task')
const {User} = require('../models/user')
const auth = require('../middleware/auth')

router.get('/list', auth, async(req, res)=>{
    const user = await User.findById(req.user._id)
    if(!user) return res.status(400).send('Usuario no esta en Base de Datos')
    const tasks = await Task
                    .find({"status": "pendiente de desembolso"})
    res.send(tasks)
})

router.post('/',auth,async(req,res)=>{
    const user = await User.findById(req.user._id)
    if(!user) return res.status(400).send('usuario no existente')

    const task = new Task({
        userId: user._id,
        value:req.body.value,
        status:'pendiente de desembolso',
        description:req.body.description
    })

    const result = await task.save()
    res.status(201).send(result)
})
    router.put('/', auth, async(req, res)=>{
        const user = await User.findById(req.user._id)
        if(!user) return res.status(400).send('No hay usuario')
        const task = await Task.findByIdAndUpdate(req.body._id,{
            userId: user._id,
            status: req.body.status,
        },
        {
            new: true
        })
        if(!task){
            return res.status(404).send('no hay tarea')
        }
        console.log(task)
    
        res.status(204).send(task)
    })


module.exports = router