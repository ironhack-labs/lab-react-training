import React from 'react';

function Greetings({lang, children}){
  // eslint-disable-next-line default-case
  const greetingsObj = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  }
  const printGreet = greetingsObj[lang]
  return (
    <article className='container-row'>
      <p>
      <span>{printGreet} {children}</span>
      </p>
    </article>
  )
}

export default Greetings