import React from 'react';
import './Greetings.css';

function Greeting(lang) {
  switch(lang) {
    case "en":
      return "Hello";
    case "de":
      return "Hallo";
    case "es":
      return "Hola";
    case "fr":
      return "Bonjour"
  }
}

export default class Greetings extends React.Component {

  render() {
    return(
      <div className='Greetings'>
        <span>{Greeting(this.props.lang)} </span><span>{this.props.children}</span> 
      </div>
    )
  }
}

