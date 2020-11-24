import React from 'react'

function Greetings(props) {
    let greetings;
    switch (props.lang){
        case 'de': 
            greetings="hallo"
            break;
        case 'fr':
            greetings = "Bonjour"
            break;
        default: greetings ="default"
        break;
        }
        
    
    return (
        <div>
            {greetings} {props.children}    

        </div>
    )
}

export default Greetings
