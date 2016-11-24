import React from 'react'
import {Link} from 'react-router'

export default () => (
  <div>
    <h1>Github search</h1>
    <Link to={{pathname: '/github', query: { user: 'okbel' }}}>Search!</Link>
  </div>
)