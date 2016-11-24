import { h, Component } from 'preact'
import GithubBadge from './GithubBadge'

export default class Github extends Component {
  constructor (props) {
    super(props)
    this.state = {
      githubUser: {}
    }
  }

  async componentDidMount () {
    const {user} = this.props
    const res = await fetch(`//api.github.com/users/${user}`)
    const githubUser = await res.json()
    this.setState({githubUser})
  }

  render () {
    return <GithubBadge user={this.state.githubUser} />
  }
}