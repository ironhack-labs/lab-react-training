import React from 'react'

function Greetings(props) {
    let {lang, children} = props
  return (
    <div>
{lang === "de" &&  <p>Hallo {children}</p>}
{lang === "fr" &&  <p>Bonjour {children}</p>}
    </div>
  )
}

export default Greetings