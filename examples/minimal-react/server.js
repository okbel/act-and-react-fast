var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.resolve('build')))

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.listen(3000)