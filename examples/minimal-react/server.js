import express from 'express'
const app = express()

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Component from './src/components/Component'
// console.log(require('util').inspect(Component, true, 10));
// const component = new Component({ data: 'Hola' })
// console.log('Instance of Component', component)

app.get('/:data', (req, res) => {
  const {data} = req.params
  const component = React.createElement(Component, {data})
  res.send(ReactDOMServer.renderToString(component))
})
//
app.listen(3000)


// res.send(ReactDOMServer.renderToString(Home()))
// ReactDOMServer.renderToString(Component())

// import ReactDOMServer from 'react-dom/server'
// import Component from './Component'
//
// console.log(
//   ReactDOMServer.renderToString(Component())
// )