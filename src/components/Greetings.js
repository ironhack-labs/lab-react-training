import React from 'react'

const Greetings = (props) => {
  const language = (lang) => {
    if (props.lang === 'de') return 'Hallo'
    if (props.lang === 'fr') return 'Bonjour'
  }

  return (
    <div className="container">
      <p lang={props.lang}>
        {' '}
        {language(props.lang)} {props.children}
      </p>
    </div>
  )
}

export default Greetings
