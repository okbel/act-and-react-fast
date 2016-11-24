import Router from 'preact-router'
import { h } from 'preact'

import Home from './components/Home'
import Github from './components/Github'

const AppRouter = () => (
  <Router>
    <Home path='/' />
    <Github path='github/:user?' />
  </Router>
)

export default AppRouter
