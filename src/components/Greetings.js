import React from 'react'

const Greetings = (props) => {
    const { children, lang } = props
  return (
    <div className='card'>
        {lang === "en" && <p>Hallo {children} </p>}
        {lang === "es" && <p>Hello {children} </p>}
        {lang === "fr" && <p>Hola {children} </p>}
        {lang === "de" && <p>Bonjour {children} </p>}
     </div>
  )
}

export default Greetings