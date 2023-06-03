function Greetings({ lang, children }) {
  return (
    <h2>
      {lang === 'de'
        ? 'Guten Tag'
        : lang === 'en'
        ? 'Oh, hi'
        : lang === 'es'
        ? 'Olà'
        : lang === 'fr'
        ? 'Bonjour'
        : 'Bonan tagon'}
      , {children}
    </h2>
  );
}

export default Greetings;
