import React from 'react';
import './Container.css'
export default function Greetings(props) {
    const lang = props.lang;
    let text = "";

    switch (lang) {
        case "de": 
            text = "Hallo Freunde!"
            break;
        case "en":
            text = "Hello friends!"
            break;
        case "es":
            text = "Hola amigos!"
            break;
        case "fr":
            text = "Salut les amis!"
            break;
        default:
            text = "Hola amigos!"
            break;
        }
    
    return (
        <div className="container">
            <h3>{text}</h3>
        </div>
    )
}