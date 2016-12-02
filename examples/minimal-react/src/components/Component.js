import React, {Component} from 'react'

export default class DumbComponent extends Component {
  render () {
    return (
      <div>
        This is react bitchhhhhhh
        {this.props.data}
      </div>
    )
  }
}