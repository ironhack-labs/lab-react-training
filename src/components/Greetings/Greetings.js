import React from 'react'

const selectLang = {
  de: 'Hallo',
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
}

function Greetings({lang, children}) {
  return (
    <div>
      {selectLang[lang]} {children}
    </div>
  )
}

export default Greetings