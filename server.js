const express = require('express')
const bodyParser = require('body-Parser')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

const port = 4545
app.listen(port, function () {console.log(`live on port ${port}`)})