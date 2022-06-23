const Greetings = ({ lang, children }) => {
  let greeting = `Hello`;

  switch (lang) {
    case `es`:
      greeting = `Hola`;
      break;
    case `fr`:
      greeting = `Bonjour`;
      break;
    case `de`:
      greeting = `Hallo`;
      break;
  }

  return (
    <p style={{border: `1px solid #000`, margin: `.5rem`, padding: `1rem`}}>{greeting + ` ` + children}</p>
  )
}

export default Greetings