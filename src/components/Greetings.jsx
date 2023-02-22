import React from 'react'

const Greetings = (props) => {

  const { lang, children } = props

  if (lang === "de") {
    return (<div className='div'>
    <p> Hallo {children}</p>
    </div>
  )} else {
  
    return (<div className='div'>
    <p>Bonjour {children}</p>
    </div>
  )}
}

export default Greetings