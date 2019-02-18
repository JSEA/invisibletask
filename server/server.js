const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const config = require('../config.js')

const app = express()

const api = require('../weatherapi/controller.js')(app,express)

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', api)

app.listen(config.PORT, function(err) {
  if(err) {
    console.log(`error connecting to port ${config.PORT}`)
  } else {
    console.log(`listening on port ${config.PORT}`)
  }
})