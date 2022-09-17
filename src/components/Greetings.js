function Greetings(props) {
  const { lang, children } = props;

  if (lang === 'de') {
    return (
      <span className="lang">
        Hallo {children}
        <br></br>
      </span>
    );
  }
  if (lang === 'fr') {
    return (
      <span className="lang">
        Bonjour {children}
        <br></br>
      </span>
    );
  }
  if (lang === 'sp') {
    return (
      <span className="lang">
        Hola {children}
        <br></br>
      </span>
    );
  }
}

export default Greetings;
