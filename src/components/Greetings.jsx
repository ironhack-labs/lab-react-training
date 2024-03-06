import React from 'react'

const configuration = {
    'de': 'Hallo',
    'fr': 'Bonjour',
    'en': 'Hello',
    'es': 'Ola',

}

const Greetings = ({lang, children}) => {
  return (
    <p>
        {configuration[lang]}: {children}
    </p>
    
  )
}

export default Greetings