import React, { Component } from 'react';
import './Greetings.css';

export default class Greetings extends Component {
    render() {
    console.log(this.props);
    const greeting = {
        "de": "Hallo",
        "en": "Hello",
        "es": "Hola",
        "fr": "Bonjour"
    }
        return (
            <div className="greetings">
                <p>{greeting[this.props.lang]} {this.props.children}</p>
            </div>
        )
    }
}
