import React from "react";

const Greetings =({lang, children})  => {
   
        let greeting 
        switch (lang) {
            case "de": greeting = "Hallo" 
            break;
            case "eng": greeting = "Hi"
            break
            case "es": greeting = "Hola"
            break
            case "fr": greeting = "Bonjour"
            break
            default: greeting = "Ño"
            break

        }
        return ( 
            <div className="greetings" style={{border: "1px solid black"}}>
            <p>{greeting} {children}</p>
            </div>
           )
}

export default Greetings;
