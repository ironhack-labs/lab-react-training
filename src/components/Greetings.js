import React from 'react'
import '../components/Greetings.css'

class Greetings extends React.Component {
    render () {
        let greeting = "";

        switch (this.props.lang) {
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
                greeting = 'Bonjour/Hola/Hello/Hallo';
        }

        return (
            <div className="Greeting">
                <p>{`${greeting}, ${this.props.children}`}</p>
            </div>
        );
    }
}

export default Greetings;