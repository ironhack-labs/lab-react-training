import React from 'react';

export default function Greetings(props) {
   let welcomeMessage;
  if (props.lang === 'de') {
      welcomeMessage = "Hallo"
  } else if(props.lang === 'fr') {
      welcomeMessage = "Bonjour"
  } else if (props.lang === 'es') {
      welcomeMessage = 'Hola'
  } else if (props.lang === 'en') {
      welcomeMessage = 'Hello'
  }

    return (
        
           <div className="greet">
               <p className="red">{welcomeMessage} {props.children}</p>
           </div>
        
    ) 
}
