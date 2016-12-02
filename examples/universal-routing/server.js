import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'

import _ from 'lodash'
import fs from 'fs'

import App from './Router.js'

const baseTemplate = fs.readFileSync('./base.html')
const template = _.template(baseTemplate)

const app = express()

app.use((req, res) => {
  const context = createServerRenderContext()
  let body = ReactDOMServer.renderToString(
    React.createElement(ServerRouter, {location: req.url, context},
      React.createElement(App)
    )
  )
  res.send(template({body}))
})

app.listen(3000)
