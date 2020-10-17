import React from 'react';

export default function Greetings(props) {
/*   if (props.lang === 'de') {
    return (
        <div>
             Hallo {props.children}
        </div>
       
    )
  } else if (props.lang === 'fr') {
    return `Bonjour ${props.children}`;
  } */

  //const welcomeMessage = props.lang === 'de' ? 'Hallo' : 'Bonjour'

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
        <div>
           <div>
               <p>{welcomeMessage} {props.children}</p>
           </div>
        </div>
    ) 
}
