import koa from 'koa'
import route from 'koa-route'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import _ from 'lodash'
import fs from 'fs'
import App from './src/App.js'

const baseTemplate = fs.readFileSync('./base.html')
const template = _.template(baseTemplate)

const app = koa()

app.use(route.get('/', function *() {
  const rendered = ReactDOMServer.renderToString(React.createElement(App))
  this.body = template({body:rendered})
}))

app.listen(3000)