
import React from 'react';

const Greetings = ({children, lang}) =>{

const greetings=(params)=>{
 switch(params){

    case "de":
      return "Hallo"
  case "en":
      return "Hello"
      case "es":
      return "Hola"
      case "fr":
        return "Bonjour"
        default: 
        return "n/a";
 }}

  return(

        <div className="saludos">
            {greetings(lang)}  {children}
        </div>
  )}
 
    
    
     
 

export default Greetings;
