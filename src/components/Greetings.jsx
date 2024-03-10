import React from 'react'

function Greetings({lang, children}) {
    const language = (lang) => {
        if (lang === 'de') {
            return 'Hallo'
        } else {
            return 'Bonjour'
        }
    }

  return (
    <div className='greetings-container'>
        {language(lang)} {children}
    </div>
  )
}

export default Greetings