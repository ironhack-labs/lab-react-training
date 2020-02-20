import React, { Component } from 'react'

const Greetings = props => {
    const {lang} = props
    let lenguajes

    switch (lang) {
        case 'de':
            lenguajes = 'Hello'
            break
        case 'fr':
            lenguajes = 'Salut'
            break
        case 'en':
            lenguajes = 'Hi'
            break
        default:
            break;
    }
    return(
        <div>
            <p style={style}>{lenguajes} {props.children}</p>
        </div>
    )
}

const style = {
    fontSize: '22px',
    border: '2px solid black',
    margin: '10px'
}


export default Greetings