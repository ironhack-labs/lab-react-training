function Greetings({ lang, children }) {
  return (
    <article className="greeting">
      <h4>
        „
        {lang === 'de'
          ? 'Guten Tag'
          : lang === 'en'
          ? 'Oh, hi'
          : lang === 'es'
          ? 'Olà'
          : lang === 'fr'
          ? 'Bonjour'
          : 'Bonan tagon'}
        , {children}“
      </h4>
    </article>
  );
}

export default Greetings;
