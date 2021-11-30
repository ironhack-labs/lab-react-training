const Greetings = (props) => {
  const { lang, children } = props;
  let greetings = '';
  switch (lang) {
    case 'es':
      greetings = 'Hola';
      break;

    case 'en':
      greetings = 'Hello';
      break;
    case 'fr':
      greetings = 'Bonjour';
      break;
    case 'de':
      greetings = 'Hallo';
      break;
    default:
      break;
  }
  return (
    <div className="greeting">
      <p>
        {greetings}, {children}
      </p>
    </div>
  );
};
export default Greetings;
