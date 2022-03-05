function greetings(props) {
  let hello = 'Olá';
  switch (props.lang) {
    case 'de':
      hello = 'Hallo';
      break;
    case 'fr':
      hello = 'Bonjour';
      break;
  }

  return (
    <p className="id-card">
      {hello} {props.children}
    </p>
  );
}

export default greetings;
