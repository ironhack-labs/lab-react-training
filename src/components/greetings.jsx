import React from 'react'

export default function greetings(props) {
    
    function greetInLanguage() {
        switch (props.lang) {
            case "en":
                return "Hello";
            case "fr":
                return "Coucou";
            case "es":
                return "Hola que talll";
            case "de":
                return "Hallo";
        }
    };
    return (
        <div className="Greetings" >
            <p> {greetInLanguage()} {props.children} <br />
            </p> </div>);
        
    
    
}
