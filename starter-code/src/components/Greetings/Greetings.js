import React, { Component } from 'react';
import './style.css';

class Greetings extends Component {
  getLang = (lang) => {
    let language = ''
    switch (lang) {
      case 'de':
        language = 'Hallo'
        break;
      case 'en':
        language = 'Hello'
        break;
      case 'es':
        language = 'Ola'
        break;
      case 'fr':
        language = 'Bonjour'
        break;

      default:

        break;
    }
    return language
  }
  render() {
    return (
      <div className='box'>
        {this.getLang(this.props.lang)} {this.props.children}
      </div>
    )
  }
}

export default Greetings