function Greetings(props) {
  let greeting = 'oi';

  switch (props.lang) {
    case 'de':
      greeting = 'Hallo, ';
      break;
    case 'fr':
      greeting = 'Bonjour, ';
      break;
    case 'es':
      greeting = 'Hola, ';
      break;
    case 'en':
      greeting = 'Hello, ';
      break;
    default:
  }

  return (
    <h2  className="border">
      {greeting}
      {props.children}{' '}
    </h2>
  );
}

export default Greetings;
