function Greetings({ lang, children }) {
  const saying = {
    de: 'Hallo',
    en: 'Hello',
    fr: 'Bonjour',
  };

  return (
    <article>
      <div className="Greetings">
        {saying[lang]} {children}
      </div>
    </article>
  );
}

export default Greetings;
