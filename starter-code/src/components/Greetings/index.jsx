import React, { Component } from 'react';

class Greetings extends Component {
    
  render() {
    const {lang, text} = this.props;
    let language = '';
    switch(lang){
      case 'de':
        language = 'Hallo';
        break;
      case 'en':
        language = 'Hello';
        break;
      case 'es':
        language = 'Hola';
        break;
      case 'fr':
        language = 'Bonjour';
        break;
      default:
        break;
    }
    return (
      <div class="greetings">
        <p>{language} {text}</p>
      </div>
    );
  }
}

export default Greetings;