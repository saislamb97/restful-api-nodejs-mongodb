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


router.get('/:id', async (req, res) => {
    try{
        const result = await dbschema.findById(req.params.id)
        res.send(result)
    }catch(err){
        res.json({message:err})
    }
    
  })

router.get('/show', async(req, res) => {

        const result = await dbschema.find({})
        const resultmap={}
        result.forEach((user)=>{
            resultmap[user._id] = user
        })
        res.send(resultmap)
  })


router.patch('/:id', async (req, res) => {
    try{
        const updatedresult = await dbschema.updateOne(
            {_id: req.params.id},
            {
                $set:{
                    username: req.body.username,
                    description: req.body.description
                }
            }
        )
        res.send(updatedresult)
    }catch(err){
        res.json({message:err})
    }
    
  })



module.exports = router