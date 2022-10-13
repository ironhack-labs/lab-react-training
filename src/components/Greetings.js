import React from 'react'

const Greetings = (props) => {
    const idiomas =[
        {lang: "es", word: "Hola"}, {lang: "en", word: "Hello"},  
        {lang: "de", word: "Hallo"}, {lang: "fr", word: "Bonjour"}
    ]
    let idioma = " "
   for(let i = 0; i < idiomas.length; i++){
        if (props.lang === idiomas[i].lang){
            idioma = idiomas[i].word
            break;
        }
        
   }
  return (
    <div className="card">
    <span>{idioma} {props.children}</span>
    </div>
  )
  
}

export default Greetings