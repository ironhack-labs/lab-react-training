import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {
        let greetings = {
            de: "Hallo",
            fr: "Bonjour",
            en: "Hello",
            es: "Hola",
        }
        return (
            <div className="greeting box">
            {greetings[this.props.lang]} {this.props.children}
            </div>
        )
    }
}
