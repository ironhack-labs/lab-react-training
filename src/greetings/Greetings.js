import React from 'react'

export default function Greetings(props) {
    switch (props.lang) {
        case 'en':
            return (
                <div className="box">
                    <p>Hello {props.children} </p>
                </div>
            );
            break;
        case 'fr':
            return (
                <div className="box">
                    <p>Bonjour {props.children} </p>
                </div>
            );
            break;
        case 'es':
            return (
                <div className="box">
                    <p>Hola {props.children} </p>
                </div>
            );
            break;
        case 'de':
            return (
                <div className="box">
                    <p>Hallo {props.children} </p>
                </div>
            );
            break;
        default:
            break;
    }
    
}



