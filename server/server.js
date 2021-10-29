const express = require('express')
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const menu = require('../models/menuModel')
const user = require('../models/userModel')
const login = require('../models/loginModel')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Ahoy!' })
  })
  
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

mongoose.Promise = global.Promise
const connect = mongoose.connect("mongodb://localhost:27017/kitcheDB")
console.log(connect)

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const routes = require('../routes/Routes')
routes(app)

app.listen(port)
console.log('Server is running on PORT 8000')
