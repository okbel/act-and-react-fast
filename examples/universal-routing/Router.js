import React from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import Home from './src/Home'
import About from './src/About'

export default () => (
  <div>
    <Match exactly pattern='/' component={Home} />
    <Match pattern='/about' component={About} />
  </div>
)