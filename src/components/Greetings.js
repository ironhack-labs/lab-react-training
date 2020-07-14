import React from 'react';

export default function Greetings(props) {
    
    const determineLang = () => {
        switch (props.lang) {
            case "de": 
                return "Hallo Freund!"
                
            case "en":
                return "Hi friend!"
                
            case "es":
                return "Hola amigo!"
                
            case "fr":
                return "Salut l'ami!"
                
            default:
                return "Hola amigos!"
            }
    }
    return (
        <div >
            <h3>{determineLang()}</h3>
        </div>
    )
}