import React from "react";

function Greetings(props) {
    return (
        <header id="greetings">
        
            <h1>  {
                props.lang==="de" 
                ?  " Hallo " 
                : (props.lang==="fr") 
                ? " Bonjour " 
                : (props.lang==="es") 
                ? "Hola" 
                : "Hello" 
                }</h1>
            <h1>  {props.children}</h1>

        </header>
    );
}

export default Greetings;