import React from 'react'

const Greetings = (props) => {
  let greetings;

  switch(props.lang) {
    case 'de':
      greetings = 'Hallo'
      break
    case 'en':
      greetings = 'Hello'
      break
    case 'es':
      greetings = 'Hola'
      break
    case 'fr':
      greetings = 'Bonjour'
      break
    default:
      greetings = ''
  }

  return (
    <div className="greetings">
      <div>
        {greetings} {props.children}        
      </div>
    </div>
  )
}

export default Greetings