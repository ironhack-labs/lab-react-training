import React, { Component } from "react";

class Greetings extends Component {
  
  helloLang = (lang) => {
    let output = '';
    switch(lang) {
      case 'de':
        output = 'Hallo';
        break;
      case 'en':
        output = 'Hello';
        break;
      case 'es':
        output = 'Hola';
        break;
      case 'fr':
        output = 'Bonjour';
        break;
      default:
        output = 'Hi';
    }
    return output;
  }
  
  render () {
    const { lang, children } = this.props;
    return (
      <div className="greetings-box">
        <p>{this.helloLang(lang)} {children}</p>
      </div>
    )
  }
}

export default Greetings;