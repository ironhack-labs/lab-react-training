function Greetings(props) {
  const { lang, children } = props;

  if (lang === 'de') {
    return <div>Hallo {children}</div>;
  }

  if (lang === 'en') {
    return <div>Hello {children}</div>;
  }

  if (lang === 'es') {
    return <div>Hola {children}</div>;
  }

  if (lang === 'fr') {
    return <div>Bonjour {children}</div>;
  }
}

export default Greetings;
