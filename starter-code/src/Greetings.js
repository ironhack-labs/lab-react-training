import React from 'react'

const langObj = {
    es: "Hola",
    en: "Hello",
    fr: "Bonjour",
    default: "que diseeee"
}

const Greetings = ({ lang, children }) => {
    return (
        <div className="card">
          <h4>{`${langObj[lang] ? langObj[lang] : langObj['default']} ${children}!`}</h4>      
        </div> 
    )   
}

export default Greetings