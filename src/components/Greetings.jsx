function Greetings(props) {

  let greeting = "";

  const { lang, children } = props;

  switch (lang) {
    case "de":
      greeting = 'Hallo';
      break;
    case "es":
      greeting = "Hola";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
  }

  return (
    <div className="greeting-box">
      <p>{greeting} {children}</p>
    </div>
  );
}

export default Greetings;
