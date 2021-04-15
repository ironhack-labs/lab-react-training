function Greetings({ lang, children }) {
  let language = 'Hello';
  switch (lang) {
    case 'de':
      language = 'Hallo';
      break;
    case 'en':
      language = 'Hello';
      break;
    case 'es':
      language = 'Hola';
      break;
    case 'fr':
      language = 'Bonjour';
      break;
  }
  return (
    <div className="language border-dark mb-2">
      <h3>
        {' '}
        {language} {children}{' '}
      </h3>
    </div>
  );
}
export default Greetings;
