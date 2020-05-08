import React from 'react';
import './Greetings.css';

class Greetings extends React.Component {
    render() {
        switch (this.props.lang) {
            case 'en':
                return <h1 className="greetings">Hello, {this.props.children}</h1>;
            case 'de':
                return <h1 className="greetings">Hallo, {this.props.children}</h1>;
            case 'fr':
                return <h1 className="greetings">Bonjour, {this.props.children}</h1>;
            case 'es':
                return <h1 className="greetings">Hola, {this.props.children}</h1>;
            default:
                return <h1></h1>;
        }
    }
}

export default Greetings;