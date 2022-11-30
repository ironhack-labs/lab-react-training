import React from 'react'

const Greetings = ({lang, children}) => {
  return (
    <div className='greetings'>
        <p>{lang === 'de' ? 'Hallo' : lang === 'fr' ? 'Bonjour' : lang === 'es' ? 'Hola' : 'Hello'} {children}</p>
    </div>
  )
}

export default Greetings