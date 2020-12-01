import React, { Component } from 'react'
import './Greetings.css'

export default class Greetings extends Component {

    state = {
        greetings: {
            de: 'Hallo',
            en: 'Hi',
            es: 'Hola',
            fr: 'Bonjour'
        }
    }

    render() {
        return (
            <div className="greetingContanier">
                <h1>{this.state.greetings[this.props.lang]} {this.props.children}</h1> 
            </div>
        )
    }
}
