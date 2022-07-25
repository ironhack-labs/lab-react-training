const Greetings = ({ lang = 'en', children }) => {
  const getLang = () => {
    switch (lang) {
      case 'de':
        return 'Hallo '
      case 'es':
        return 'Hola '
      case 'fr':
        return 'Bonjour '
      default:
        return 'Hello '
    }
  }
  return (
    <h3>
      {getLang()}
      {children}
    </h3>
  )
}

export default Greetings
