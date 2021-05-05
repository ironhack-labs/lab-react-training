import React from 'react'

export default function Greetings(props) {
    const greetings = {
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola',
        en: 'Hi'
    }
    if (props.lang && (props.lang !== '')) {
        return (
            <div className="greetings-card">
            {greetings[props.lang]}, {props.children}
            </div>
        )
    }
    // default
    return (
    <div className="greetings-card">
        Hi, {props.children}
    </div>
    )
    
}
