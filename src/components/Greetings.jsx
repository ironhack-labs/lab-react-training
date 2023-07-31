const Greetings = (props) => { 
  const { lang, children } = props
  let greetingMessage

  if (lang === 'de') {
    greetingMessage = 'Hallo'
  } else if (lang === 'fr') {
    greetingMessage = 'Bonjour'
  } else if (lang === 'en') {
    greetingMessage = 'Hello'
  } else if (lang === 'es') {
    greetingMessage = 'Hola'
  }

  return (
    <div className="Greetings">
      <p>{greetingMessage} {children}</p>
    </div>
  )
}

export default Greetings