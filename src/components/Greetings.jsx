const greetings = ["de", "en", "es", "fr"];

function Greetings(props) {
  const { lang, children } = props;
  // Function Declarations

  if (lang === greetings[0]) {
    return <p>Hallo {children}</p>;
  } else if (lang === greetings[1]) {
    return <p>Hello {children}</p>;
  } else if (lang === greetings[2]) {
    return <p>Hola {children}</p>;
  } else {
    return <p>Bonjour {children}</p>;
  }
}

export default Greetings;
