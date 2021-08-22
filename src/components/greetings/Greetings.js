function Greetings(props) {
  const text = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
    it: 'Ciao',
  };

  return (
    <div className="Greetings">
      {text[props.lang]} {props.children}
    </div>
  );
}

export default Greetings;
