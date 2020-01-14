import React, { Component } from 'react';
import { render } from 'react-dom';

function Greetings(props) {
    switch (props.lang) {
        case "de":
            return <div>
                <p>Hallo, {props.children}!</p>
            </div>
        case "en":
            return <div>
                <p>Hello, {props.children}!</p>
            </div>
            case "es":
                return <div>
                    <p>Hola, {props.props.children}!</p>
                </div>
            case "fr":
                return <div>
                    <p>Bonjour, {props.children}!</p>
                </div>
    }
    
       

}

export default Greetings