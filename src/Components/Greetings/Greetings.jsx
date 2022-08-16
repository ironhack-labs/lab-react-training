import React from "react";


function Greetings(props) {
    const {lang, children} = props;
    switch(lang){
        case "en":
            lang = "hello";
            break;
            case "fr":
                lang = "bonjour";
                break;
                case "es":
                    lang = "holla";
                    break;
default :
return "oi";
    }
  
    return (
       <div>   <p>{lang} {children}</p></div>
    );
}

export default Greetings;