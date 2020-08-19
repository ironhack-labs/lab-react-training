import React from 'react';
import './Greetings.css'

//Iteration 2: define greetings, make a switch so that each language outputs a different greeting, return props lang and props children (https://stackoverflow.com/questions/49706823/what-is-this-props-children-and-when-you-should-use-it)
const Greetings = (props) => {
   const langs = (lang) => {
    switch (lang) {

        case 'es':
            return "Hola";
        case 'en': 
            return "Hello";
        case 'fr': 
            return "Bonjour";
        case 'sw': 
            return "Hej";

            default:
                return 'Hola';   
    
    }
  
   }; 
   
   return (
    <div className = "greetings">{langs(props.lang)} {props.children}</div>
   );
  
  };


export default Greetings