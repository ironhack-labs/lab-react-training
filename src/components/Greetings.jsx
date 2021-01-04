import React, { Component } from 'react';


export default class Greetings extends Component {

    state = {
        greetings: {
            de: "Hallo",
            en: "Hello",
            es: "Hola",
            fr: "Bonjour"
        }
    }

    render() {
        return (
            <>
                <div className="Greetings">
                    <h3>{ this.state.greetings[this.props.lang] } { this.props.children }</h3>
                </div>
            </>
        )
    }
}