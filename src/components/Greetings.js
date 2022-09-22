function Greetings({ lang, children }) {
  const saying = {
    de: 'Hallo',
    fr: 'Bonjour',
    en: 'Hello',
    es: 'Hola',
  };
  return (
    <h4>
      {saying[lang]} {children}
    </h4>
  );
}

export default Greetings;
