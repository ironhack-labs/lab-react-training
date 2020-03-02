import React, { Component } from 'react';
import './style.scss';

class Greetings extends Component {
  render() {
    const {lang,children} = this.props;

    switch(lang){
      case 'de':
        return <div className="greetings">Hallo {children}</div>;
        break;
      case 'fr':
        return <div className="greetings">Bonjur {children}</div>;
        break;
      case 'es':
        return <div className="greetings">Buenos dias {children}</div>;
        break;
      default:
        return <div className="greetings">Hello {children}</div>;
        break;
    }
    
  }
}

export default Greetings;
/*

Create a component where, depending on the props.lang you render a different word + the props.children for the name of the person
*/

// const greetings = [
//   {
//     id: '123',
//     lang: 'de',
//     greeting: 'Hallo'
//   },
//   {
//     id: '456',
//     lang: 'fr',
//     greeting: 'Bonjur'
//   }
// ];
