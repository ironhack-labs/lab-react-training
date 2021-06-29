function Greetings(props) {
  let greet = '';
  // eslint-disable-next-line default-case
  switch (props.lang) {
    case 'de':
      greet = 'Hallo';
      break;
    case 'en':
      greet = 'Hello';
      break;
    case 'es':
      greet = 'Hola';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
  }
  return (
    <div>
      {greet} {props.children}
    </div>
  );
}

export default Greetings;
