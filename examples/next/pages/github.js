import React, {Component} from 'react'
import GithubBadge from '../components/GithubBadge'

export default class Github extends Component {
  constructor () {
    super()
    this.state = {
      githubUser: {}
    }
  }

  async componentDidMount () {
    const {user} = this.props.url.query
    const res = await fetch(`//api.github.com/users/${user}`)
    const githubUser = await res.json()
    this.setState({githubUser})
  }

  render () {
    return <GithubBadge user={this.state.githubUser} />
  }
}