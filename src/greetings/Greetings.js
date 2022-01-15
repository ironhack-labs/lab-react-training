import React from 'react';
import "./Greetings.css"

const language = (props) =>{
    if(props.lang === 'de') {
        return 'Hallo';
      }
      if(props.lang === 'fr') {
        return 'Bonjour';
      }
      if(props.lang === 'es') {
        return 'Hola';
      }
      else{
        return 'Hello';
      }
    };
    
    
    function Greetings(props) {
      return (
    
        <p className='Greetings'>{language(props)} {props.children}</p>
      )
}
export default Greetings;