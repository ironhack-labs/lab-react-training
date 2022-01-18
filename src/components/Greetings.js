import React from 'react'

const Greetings = ({ lang, children }) => {
  return (
    <div className="border words" style={{}} >
      <h4> 
        {(lang === "de") ? 'Hallo' 
        : (lang === "en") ? "Hello" 
        : (lang === "fr") ? "Bonjour" 
        : (lang === "es") ? "Hola" : ''} {children} 
      </h4>
    </div>
  )
}

export default Greetings
