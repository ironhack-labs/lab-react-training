import React from 'react';
import '../styles/Greetings.css';

function Greetings (props){
    function language (lang){
        switch (lang){
            case "de":
                return "Halo"
            case "fr":
                return "Bonjour"    
        }
    }
    
    return (
        <div className="Greetings">
            <p>{language(props.lang)} {props.children} </p>
        </div>
    )
}

export default Greetings;