import React from 'react';
import './Container.css'

export default function Greetings(props) {
    
    const determineLang = () => {
        switch (props.lang) {
            case "de": 
                return "Hallo Freunde!"
                
            case "en":
                return "Hello friends!"
                
            case "es":
                return "Hola amigos!"
                
            case "fr":
                return "Salut les amis!"
                
            default:
                return "Hola amigos!"
                
            }
    }
    return (
        <div className="container">
            <h3>{determineLang()}</h3>
        </div>
    )
}