function Greetings(props) {
  let greet = '';

  switch (props.lang) {
    case 'de':
      greet = 'Hallo';
      break;

    case 'fr':
      greet = 'Bonjour';
      break;
    case 'en':
      greet = 'Hello';
      break;

    default:
      greet = 'Hola';
  }

  return (
    <div className="greetings">
      <p>
        {greet} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
