function Greetings(props) {
  const { lang, children } = props;

  function chooseLanguage() {
    if (lang === 'de') {
      return <span>Hallo</span>;
    } else if (lang === 'en') {
      return <span>Hello</span>;
    } else if (lang === 'es') {
      return <span>Hola</span>;
    } else if (lang === 'fr') {
      return <span>Bonjour</span>;
    }
  }

  return (
    <div className="greeting">
      <p>
        {chooseLanguage()} {children}
      </p>
    </div>
  );
}

export default Greetings;
