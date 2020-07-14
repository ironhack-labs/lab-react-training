import React from 'react';

export default function Greetings(props) {
  let helloWord="";

  switch (this.props.lang) {
    
    case 'de':
      helloWord = 'Hallo';
      break;
      case 'es':
      helloWord = 'Hola';
      break;
    case 'fr':
      helloWord = 'Bounjour';
      break;
    default:
      helloWord = 'Hello';
      break;
  }
  return (
    <h1 className="card">
      {helloWord} {this.props.children}
    </h1>
  );
}
