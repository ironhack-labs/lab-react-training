import React, { Component } from 'react';
import './Greetings.css';

class Greetings extends Component {
    render() {
        const { lang } = this.props;
        let greeting = '';

        switch (lang) {
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
                greeting = 'Hello';
                break;
        }

        return (
            <p className='container content'>{greeting} {this.props.children}</p>
        );
    }
}

export default Greetings;