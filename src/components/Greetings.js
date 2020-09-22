import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {
        const greeting = {
            "de": "Hallo",
            "en": "Hello",
            "es": "Hola",
            "fr":  "Bonjour"
        }

        return (
            <div className="greetings">
                <h2>{greeting[this.props.lang]} {this.props.children}</h2>
            </div>
        )
    }
}

