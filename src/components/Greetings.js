import React from 'react'
import '../assets/css/Greetings.css'

const Greetings = ({ lang, children}) => {

    let greetings

    if(lang === 'de'){
       greetings = <p lang={lang}>Guten Morgen {children}</p> 
    }
    else if(lang === 'es'){
        greetings =  <p lang={lang}>Buenos días {children}</p> 
    }
    else if(lang === 'fr'){
        greetings =  <p lang={lang}>Bonjour {children}</p> 
    }
    else {
        greetings =  <p lang={lang}>Good morning {children}</p> 
    }

  return (
    <h3 className="Greetings card__container">
       {greetings} 
    </h3>
  )
}

export default Greetings
