function Greetings(props) {
  console.log(props)
  let prefix = ""
  if (props.lang === 'en') {
    prefix = "Hello"
  } else if (props.lang === 'de') {
    prefix = "Hallo"
  } else if (props.lang === 'fr') {
    prefix = "Bonjour"
  } else if (props.lang === 'es') {
    prefix = "Holla"
  }
  return (
    <div className="greeting">
      <span>{prefix + " " + props.children}</span>
    </div>
  )
}

export default Greetings