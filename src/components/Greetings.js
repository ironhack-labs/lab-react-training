import React from 'react';

export default function Greetings(props) {
  let helloWord = 'hello';
  switch (this.props.lang) {
    case 'es':
      helloWord = 'Hola';
      break;
    case 'fr':
      helloWord = 'Bounjour';
      break;
    case 'de':
      helloWord = 'Hallo';
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
