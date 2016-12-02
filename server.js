const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve('/src')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve('src','index.html'))
})

app.listen(3000)
