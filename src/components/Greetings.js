import React, { Component } from 'react';

export default class Greetings extends Component {
  
  getMessage(){
    const data = {
      'en': 'Hello ',
      'de': 'Hallo',
      'es': 'Hola',
      'fr': 'Bonjour',
    }
    console.log(this.props.lang)
    return `${data[this.props.lang]} ${this.props.children}`
  }

  render(){
    return (
      <p className="encuadred" lang={this.props.lang}>{this.getMessage()}</p>
    );
  }
}