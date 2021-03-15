import React from 'react';
import "./../styles/Greeting.css";


function displayGreetings(props) {  
    if (props.lang === "de") {
        return "Hallo";
    } else if (props.lang === "en") {
        return  "Hello";
    } else if (props.lang === "es") {
        return  "Ola";
    } else if (props.lang === "fr") {
        return  "Coucou";
    }
}

function Greeting(props) {
    return (
        <h3 id="greetings" class="borderClass">{displayGreetings(props)} {props.firstName}</h3>
    );
}

export default Greeting