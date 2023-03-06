const express = require('express')
const app = express()
const router = require('./routes/routers')
const bodyparser = require('body-parser')


app.use(bodyparser.json())
//app.use(bodyparser.urlencoded({ extended: true }));

app.use('/', router)


app.listen(5000, ()=> console.log("server is running"))