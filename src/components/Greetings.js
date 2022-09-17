function Greetings(props) {
  const { lang, children } = props;

  if (lang === 'de') {
    return `Hallo ${children}`;
  }

  if (lang === 'en') {
    return `Hello ${children}`;
  }

  if (lang === 'es') {
    return `Hola ${children}`;
  }

  if (lang === 'fr') {
    return `Bonjour ${children}`;
  }
}

export default Greetings;
