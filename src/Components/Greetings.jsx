function Greetings(props) {
  const { lang, children } = props;

  function language() {
    if (lang === 'de') {
      return 'Hallo';
    } else if (lang === 'en') {
      return 'Hello';
    } else if (lang === 'es') {
      return 'Hola';
    } else {
      return 'Bonjour';
    }
  }
  return (
    <div>
      <p>
        {language()} {children}
      </p>
    </div>
  );
}
export default Greetings;
