import React, { Component } from 'react'
import './Greetings.css';

export default class Greetings extends Component {

    state = {
        salutations : {
            en: 'Hello',
            es: 'Hola',
            it: 'Ciao',
            fr: 'Bonjour',
            de: 'Hallo'
        }
    };

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className="container">
                {this.state.salutations[this.props.lang]} {this.props.children}
                </div>
            </div>
        )
    }
}
