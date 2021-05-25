import React from 'react'

export default function Greetings(props) {
    let palabra = ''
    switch(props.lang){
        case 'de':
            palabra = `Hallo ${props.children}`
        break;
        case 'fr':
            palabra = `Bonjour ${props.children}`
        break;
        case 'es':
            palabra = `Hola ${props.children}`
        break;
        case 'en':
            palabra = `Hello ${props.children}`
        break;
    }
    return (
        <>
        <div className="container tabla">
            {palabra}
        </div>
        <br />
        </>
    )
}
