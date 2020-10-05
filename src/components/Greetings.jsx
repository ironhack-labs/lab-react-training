import React from 'react';

const Greetings = (props) => {
    const langHandler = (lang) => {
        const structLang  = {
            en: "Hello",
            de: "Hallo",
            fr: "Bonjour",
            es: "Hola",
        }
        return structLang[lang];
    }

    return (
        <div className="greetings">
           <p>{langHandler(props.lang)} {props.children}</p> 
        </div>
    )
}

export default Greetings;