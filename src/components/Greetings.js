import React from 'react';

/* class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.lang = "de" || "en" || "es" || "fr"
    this.text = ""
  }

  render() {
    return(
      <p>{}</p>
    )
  }
} */

function Greeting(props) {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello!';
  }
  return (
    <p>
      {greeting} {props.children}
    </p>
  );
}

export default Greeting;
