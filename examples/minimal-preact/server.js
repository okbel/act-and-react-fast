const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve('build')))

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')))

app.listen(3000)