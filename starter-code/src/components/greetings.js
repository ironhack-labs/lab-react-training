import React, { Component } from 'react'

class Greetings extends Component {
  render () {
    var greetingstext = "";
    switch (this.props.lang) {
      case 'de':
        greetingstext = "Guten Tag"
        break
      case 'fr':
          greetingstext = "Bonjour Mon Senior"
        break
      case 'es':
          greetingstext = "Hola por favor"
        break
      case 'en':
          greetingstext = "Hello my friend"
        break
        default:
            greetingstext = "Cappuccino"
    }
    return (
      <div>
        <div className='greetings'>
          <p>
            {greetingstext}<span> {this.props.children}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Greetings
