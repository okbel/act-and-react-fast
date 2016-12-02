require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom-server')
const { match, RouterContext } = require('react-router')
// If we use readux {Provider} and our {Store}
const _ = require('loadash')
const fs = require('fs') // we neeed that index file in memory
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate) // fn => fn
const { Routes } = require('../app.js')

const app = express()

app.use('/public', express.static('./public'))

app.use((req, res) => {
  match({ routes: Routes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302,redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(RouterContext, renderProps)
      )

      res.send(template(body))
    }
  })
})
