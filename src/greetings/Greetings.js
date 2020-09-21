import React from 'react';
import './Greetings.css'

const Greetings = (props) => {
    const languages = {
        de: 'Hallo',
        en: 'Hello',
        fr: 'Bonjour',
        es: 'Hola'
    }

    const lang = props.lang;
    let greet;

    Object.keys(languages).forEach(key => {
        if (key === lang) {
            greet = languages[key]
        }
    })

    return (
        <div className="greetings">
            <p>{greet} {props.children}</p>
        </div>
    )

}

export default Greetings;