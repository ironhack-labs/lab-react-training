import React from 'react'
import './Greetings.css'

export default function Greetings(props) {

    switch(props.lang){
        case 'en':
            return (
                <div>
                    <div className="box">
                        <p>Hello {props.children}</p>
                    </div>
                </div>
            );

        case 'de':
            return (
                <div>
                    <div className="box">
                        <p>Hallo {props.children}</p>
                    </div>
                </div>
            );

        case 'es':
            return (
                <div>
                    <div className="box">
                        <p>Hola {props.children}</p>
                    </div>
                </div>
            );

        case 'fr':
            return (
                <div>
                    <div className="box">
                        <p>Bonjour {props.children}</p>
                    </div>
                </div>
            );
        default:
    }
    
}
