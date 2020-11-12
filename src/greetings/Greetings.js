import React from 'react';

import "./Greetings.css";

function message(lang){

    switch(lang){
        case "de":
            return "Hallo";
            case "en":
                return "Hello";
                case "es":
                    return "Olá";
                    case "fr":
                        return "Bonjour";
    }
}

function Greetings(props){

return(
<div className="greetings">
   <p>{message(props.lang)} {props.children}</p>
</div>
)
}

export default Greetings;