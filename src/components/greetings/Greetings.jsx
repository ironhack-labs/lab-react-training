import './greetings.css';

const Greetings = ({ lang, children }) => {
  let greeting;
  switch (lang) {
    case 'de':
      greeting = 'Hallo ';
      break;
    case 'en':
      greeting = 'Hello ';
      break;
    case 'fr':
      greeting = 'Bonjour ';
      break;

    default:
      greeting = 'Hola ';
      break;
  }

  return (
    <div className="greeting-container">
      <h2>
        {greeting}
        {children}
      </h2>
    </div>
  );
};

Greetings.defaultProps = {
  lang: 'es',
};

export default Greetings;
