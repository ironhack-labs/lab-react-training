import React from 'react'

const Greetings = ({ lang, children }) => {
  return (
    <div className="border words" >
      <h4> {(lang === 'de') ? 'Hallo' : 'Bonjour'} {children} </h4>
    </div>
  )
}

export default Greetings
