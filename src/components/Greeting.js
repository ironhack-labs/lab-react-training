import React from 'react';

function Greeting(props) {
    let greet = "Hello"; 
    switch(props.lang){ 
        case 'en': greet = "Hello"; break;
        case 'de': greet = "Hallo"; break;
        case 'es': greet = "Hola"; break;
        default: greet = "hi"; break;
    } 
    return (<div> {greet} {props.children}</div>
    
        
    )};
export default Greeting;
