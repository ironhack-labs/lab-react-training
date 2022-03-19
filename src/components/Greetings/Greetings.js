import React, { Component } from 'react'
import './Greetings.css'

class Greetings extends Component  {

    sayHello = () => {
        let value = 'Hola'
        switch (this.props.lang) {
            case 'de':
                value = 'Hallo'
                break
            case 'en':
                value = 'Hello'
                break
            case 'es':
                value = 'Hola'
                break
            case 'fr':
                value = 'Bounjour'
                break
            default:
                value = 'Hello'
        }

        return value
    }


    render() {
        return (
            <div className='Greetings-block p-3 bold mb-3'>
                {this.sayHello()} {this.props.children}
            </div>
        )
    }
}


export default Greetings