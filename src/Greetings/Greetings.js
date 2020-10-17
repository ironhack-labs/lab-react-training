import React from 'react';

let Message

function Greetings(props){
    switch (props.lang){
        default:
            Message= ""
        break;

        case "fr":
            Message="Bonjour"
        break;

        case "de":
            Message="Hallo"
        break;
        }

    return(
        <div className='greeting'>
           <p>{Message} {props.children}</p> 
        </div>
    )
}

export default Greetings