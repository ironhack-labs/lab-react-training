const Greetings = props => {
  const { lang, children } = props
  return (
    <div className="Greetings">
      {lang === "fr" ? <h2>Bonjour {children}</h2> : <h2>Hallo {children}</h2>}
    </div>
  )
}

export default Greetings;