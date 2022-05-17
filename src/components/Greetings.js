import React from "react";
import '../styles/Greetings.css'

const Greetings = ({lang, children}) => {
    let greetings;
    if(lang === 'es'){
        greetings='Hola Español';
    } else if (lang === 'es'){
        greetings='Hello English';
    } else if (lang === 'de'){
        greetings='Hallo Ludwig';
    } else if (lang === 'fr'){
        greetings='Bonjour François'
    }


    return (
        <div className="greetings">
            {greetings}       
        </div>
    );
}

export default Greetings;