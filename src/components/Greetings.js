import React from 'react'

export const Greetings = (props) => {
    const {children, lang} = props
  return (
    <div className='card'>
        {lang == "en" && <p>Hello { children }</p>}
        {lang == "es" && <p>Hola { children }</p>}
        {lang == "fr" && <p>Bonjour { children }</p>}
        {lang == "de" && <p>Hallo { children }</p>}
        
    </div>
  )
}

export default Greetings;