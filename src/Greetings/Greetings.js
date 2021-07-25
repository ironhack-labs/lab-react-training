import { Component } from "react";
import './Greetings.css'




function Greetings ({lang, children}){
  const greeting = {
    de: 'Guten Tag',
    fr: 'Bonjour',
    es: 'Hola',
    en: 'Hello',
    pt: 'Olá',
    jp: 'Konnichiwa'
  }

  return(
    <div className = 'container'>
      <h3 >
       {`${greeting[lang]} ${children}`}
      </h3>
    </div>
  )
}


export default Greetings