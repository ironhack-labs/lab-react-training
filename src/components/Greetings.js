import React from 'react'

const Greetings = (props) => {
    let greeting; 
    switch (props.lang){
        case'de': greeting = "GutenTag";
        break;
        case'fr': greeting = "Bonjour" ;
        break;
        case'es': greeting = "Hola"; 
        break; 
        case'en': greeting = "Hello";
        break; 
        default: greeting = 'Hi'
        break;
    }
    return (
        <div>
            <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings;