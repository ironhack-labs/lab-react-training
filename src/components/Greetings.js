import React from 'react'

const Greetings = (props) => {
    let lang = '';
    switch(props.lang){
        case "de":
            lang = "Hallo";
            break;
        case "en":
            lang =  "Hello";
            break;
        case "es":
            lang = "Hola";
            break;
        case "fr":
            lang =  "Bonjour";
            break;
        default:
            lang = "Hi"
    }

    return  (   
            <p>{lang} {props.children}</p>
    )


}

export default Greetings;