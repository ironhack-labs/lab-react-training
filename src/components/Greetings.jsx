import React from 'react'

function Greetings(props) {
    const {lang, children} = props;
    const langGreetings = (lang) => {
        if(lang === 'de') return 'Hallo'
        else if(lang === 'fr') return 'Bonjour'
        else if(lang === 'es') return 'Buenas'
        else return 'Hello'
    }
  return (
    <div>{langGreetings(lang)} {children}</div>
  )
}

export default Greetings