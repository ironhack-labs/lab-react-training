import React from 'react'

function Greetings({ lang, children }) {

  switch (lang) {
    case 'de':
      lang = 'Hallo';
      break;
    case 'es':
      lang = 'Hola'
      break;
    case 'fr':
      lang = 'Salut'
      break;
      default:
      lang = 'Hello';
  }

  return (
    <div className="d-flex flex-row border border-dark m-1 ">
      <p>{lang} {children}</p>
    </div>
  )
}

Greetings.defaultProps = {
  lang: '',
  children: '',
}

export default Greetings