import React from 'react'
import './Greeting.css'

const Greetings = (props) => {
    let greet
  
    switch (props.lang) {
      case 'de':
        greet = 'hallo '
        break
      case 'en':
        greet = 'hello '
        break
      case 'es':
        greet = 'hola '
        break
      case 'fr':
        greet = 'bonjour'
        break
      default:
        greet = 'did hello works for you?'
    }
    return (
      <div className='gretingsStranger'>
        {greet}
        {props.children}
      </div>
    )
  }
  

  export default Greetings