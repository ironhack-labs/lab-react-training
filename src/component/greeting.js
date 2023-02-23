import React from 'react'

export const Greeting = (props) => {

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