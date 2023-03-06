const express = require('express')
const router = express.Router()
const dbschema = require('../models/database')



router.get('/', (req, res)=>{
    res.send("Hello get")
})

router.post('/', (req, res)=>{
    //console.log(req.body)
    const dataschema = new dbschema({
        username: req.body.username,
        description: req.body.description
    })

    dataschema.save().then(data => {
        res.send(data)
    }).catch((err)=>{
        res.json({message:err})
    })
})




module.exports = router