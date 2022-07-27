import React from 'react'

function Greetings({lang, children}){
   function language(lang){
    
       switch (lang) {
           case 'de':
            return  `Hallo ${children}`;
           case 'en':
            return `Hello ${children}`;
           case 'fr':
            return `Bonjour ami ${children}`;
           case 'es':
            return `Hola amigo ${children}`;
           default:
             return 'no hay lenguaje'
         }
    }
  return (
    <>
        <h3>{language(lang)}</h3>        
    </>
  )
}

export default Greetings