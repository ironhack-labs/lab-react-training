import React, { Component } from 'react'

export class Greetings extends Component {
    message = this.props.lang === "de"? 'Hallo' : this.props.lang === "en"? 'Hello' :  this.props.lang === "es"? 'Hola' : 'Bonjour'
    render() {
        return (
            <div className='borderWrapper'>
                <p>{this.message} {this.props.children}</p>
            </div>
        )
    }
}

export default Greetings
