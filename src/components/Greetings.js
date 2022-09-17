function Greetings({ lang, children }) {
  const saying = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <article>
      <h1>
        {saying[lang]} {children}
      </h1>
    </article>
  );
}

export default Greetings;
