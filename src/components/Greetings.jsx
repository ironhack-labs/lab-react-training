import React from 'react'

function Greetings(props) {

  const {lang, children} = props  

  function getLang(language) {
  switch (language) {
    case 'de':
      return "Hallo" 
    case 'en':
      return "Hello"
    case 'es':
      return "Hola"
    default:
      return "Bonjour"
  }
}
  return (
    <div>
<p>{getLang(lang)} {children}</p>
    </div>
  )
}

export default Greetings



 

