import React, {Component} from 'react'
import Navigation from '../components/Navigation'

export default class extends Component {
  static getInitialProps({req}) {
    return {
      location: req ? 'Server' : 'Client' 
    }
  }
  render() {
    return (
      <div>
        <Navigation />
        <div>
         You are {this.props.location} 
        </div>
      </div>
    )
 }   
}
