import './Greetings.css';

function Greetings(props) {
  const { lang, children } = props;

  const language = (lang) => {
    switch (lang) {
      case 'en':
        return 'Hello';
        break;

      case 'de':
        return 'Hallo';
        break;

      case 'fr':
        return 'Bonjour';
        break;

      case 'es':
        return 'Hola';
        break;
    }
  };

  return (
    <div className="greetings">
      <p>
        {language(lang)} {children}
      </p>
    </div>
  );
}

export default Greetings;
