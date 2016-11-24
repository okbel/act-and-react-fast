import React from 'react'

export default ({user}) => (
  <div>
    <img src={user.avatar_url} />
    <h1>{user.login}</h1>
    <p>{user.bio}</p>
  </div>
)