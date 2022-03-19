import React, { Component } from 'react'
import './Greetings.css'

class Greetings extends Component {
    constructor(props) {
        super(props)
        this.lang = props.lang
        this.children = props.children
    }

    chooseLang(lang) {
        let className= ''
        switch (lang) {
            case 'de':
                className = 'Hola en aleman';
                break;
            case 'fr':
                className = 'Hola en frances';
                break;
            case 'es':
                className = 'Hola en hola';
                break;
            default:
                className = 'Hola en ingles';
                break;
        }
    return className; 
    }

    render() {
        return(
            <div className='greetings-card'>
                <p>{this.chooseLang(this.lang)}</p>
            </div>
        )
    }
}

export default Greetings