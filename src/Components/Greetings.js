import React, { Component } from 'react'
import './Greetings.css'


export default class Greetings extends Component {

    render() {
        let greet = '';
        if (this.props.lang === 'de') {
            greet = 'Hallo';
        } else if (this.props.lang === 'fr') {
            greet = 'Bonjour';
        } else if (this.props.lang === 'es') {
            greet = 'Hola';
        } else if (this.props.lang === 'en') {
            greet = 'Hello';
        }
        return (
            <p className = "container">
                {greet} {this.props.children}
            </p>
        )
    }
}

// export default class Greetings extends Component {
//     render() {
//       let greet = '';
//       switch (this.props.lang) {
//         case 'de':
//           greet = 'Hallo';
//           break;
//         case 'fr':
//           greet = 'Bonjour';
//           break;
//           case 'mx':
//           greet = 'Que onda';
//           break;
//         default:
//           greet = 'Hello';
//       }
//       return <p>{greet} {this.props.children}</p>;
//     }
//   }