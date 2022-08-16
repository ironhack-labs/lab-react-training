function Greetings(props) {
  let { lang, children } = props;
  switch (lang) {
    case 'en':
      lang = 'Hello';
      break;
    case 'es':
      lang = 'Hola';
      break;
    case 'fr':
      lang = 'Bonjour';
      break;
    case 'de':
      lang = 'Hallo';
      break;
  }
  return (
    <div>
      {lang} {children}
    </div>
  );
}

export default Greetings;
