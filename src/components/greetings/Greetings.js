function Greetings({ lang, children }) {
  let greeting = 'Hello';
  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
  }

  return (
    <nav className="border border-dark mb-2">
      <span class="navbar-text">
        {greeting} {children}{' '}
      </span>
    </nav>
  );
}
export default Greetings;
