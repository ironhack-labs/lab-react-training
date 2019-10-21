import React from 'react';

class Greetings extends React.Component {
  render() {

    let greeting;
    switch (this.props.lang) {
      case "de": greeting = "Hallo";
        break;
      case "fr": greeting = "Bonjour";
        break;
      case "en": greeting = "Hello";
        break;
      case "es": greeting = "Hola";
        break;
      default: greeting = "Hi";
    }

    return <p className="Greeting">{greeting} {this.props.children}</p>
  }
}

export default Greetings;