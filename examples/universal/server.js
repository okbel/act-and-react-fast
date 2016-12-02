import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import _ from 'lodash'
import fs from 'fs'

import App from './Component.js'

const baseTemplate = fs.readFileSync('./base.html')
const template = _.template(baseTemplate)

const app = express()

app.get('/', (req, res) => {
  const rendered = ReactDOMServer.renderToString(React.createElement(App))
  res.send(template({body: rendered}))
})

app.listen(3000)