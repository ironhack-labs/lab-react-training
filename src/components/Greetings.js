import React from 'react';

class Greetings extends React.Component {
  render() {
    let greet = '';
    switch (this.props.lang) {
      case 'de':
        greet = 'Hallo';
        break;
      case 'es':
        greet = 'Hola';
        break;
      case 'en':
        greet = 'Hi';
        break;
      case 'fr':
      default:
        greet = 'Bonjour';
        break;
    }
    return (
      <div className=" box">
        {greet} {this.props.children}
      </div>
    );
  }
}

export default Greetings;
