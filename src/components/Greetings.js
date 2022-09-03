function Greetings(props) {
  let message = '';
  if (props.Lang === 'fr') {
    message = `Bonjour`;
  }
  if (props.Lang === 'de') {
    message = `Hallo`;
  }
  if (props.Lang === 'es') {
    message = `Buenos dias`;
  }
  if (props.Lang === 'en') {
    message = `Hello`;
  }
  return (
    <div>
      {message} {props.children}
    </div>
  );
}

export default Greetings;
