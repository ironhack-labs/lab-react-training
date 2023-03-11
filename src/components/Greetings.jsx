import React from 'react'

export default function Greetings({ lang, children }) {

  const langConfig = {
    de: "Hallo",
    en: "Hello",
    es: "Holi",
    fr: "Bonjour"
  }
 
  return (
    <div className='border border-black mt-2'>
      <p className=''>{langConfig[lang]} {children}</p>
    </div>
  )
}
