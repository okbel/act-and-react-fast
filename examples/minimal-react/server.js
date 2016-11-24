const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve('build')))

app.get('/', (req, res) => res.sendFile('index.html'))

app.listen(3000)