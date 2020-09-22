import React from 'react';

const greetingstyle = {
    border: "1px solid black",
    margin: 20,
    display: "flex",
    padding: 20,
    fontSize: 22
}

const Greetings = props => {
    const languages = {
        de: 'hallo',
        en: 'hi',
        es: 'hola',
        fr: 'salut'
    }
    
    return (
        <div style={greetingstyle}>
            <span>{languages[props.lang]} {props.children}</span>
        </div>
    ) 
}

export default Greetings;