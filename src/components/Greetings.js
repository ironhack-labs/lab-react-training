import React from 'react'

export default function Greetings(props) {
    let greet = 'Hello';
    switch(props.lang) {
        case "de": greet = "Hallo"; break;
        case "eng": greet = "Hello"; break;
        case "fr": greet = "Bonjour"; break;
        case "es": greet = "Buenos Dias"; break;
        default: greet = "Hello";
    }
return (<div> {greet} {props.children}</div>
    );
}


