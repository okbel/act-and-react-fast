const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve('node_modules/react-dom/dist/')))
app.use(express.static(path.resolve('node_modules/react/dist/')))
app.use(express.static(path.resolve('node_modules/babel-standalone')))

app.use(express.static(path.resolve('src')))
app.use('/examples', express.static(path.resolve('examples')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('src','index.html'))
})

app.listen(3000)
