

//-----iteration 2----- 


import React from 'react';
import '../styles/Greetings.css';




function Greetings (props){
    function language (lang){
        switch (lang){
            case "de":
                return "Halo"
            case "en":
                return "Hello"
            case "es":
                return "hola"
            case "fr":
                return "Bonjour"
            default:
        }
    }
    
    return (
        <div className="Greetings">
            <p>{language(props.lang)} {props.children} </p>
        </div>
    )
}







export default Greetings;