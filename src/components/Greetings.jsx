const Greetings = (props) => { 
  const { lang, children } = props

  if (lang === 'de') {
    return <p>Hallo {children}</p>
  } else if (lang === 'fr') {
    return <p>Bonjour {children}</p>
  } else if (lang === 'en') {
    return <p>Hello {children}</p>;
  } else if (lang === 'es') {
    return <p>Hola {children}</p>;
  }
}

export default Greetings