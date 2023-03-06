const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('dotenv').config()
const dburl = process.env.DATABASE_URL

mongoose.connect(dburl)

const dbschema = Schema({
    username:{
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    date : {
        type: String,
        default: Date.now
    }
})


module.exports = mongoose.model('profile', dbschema)