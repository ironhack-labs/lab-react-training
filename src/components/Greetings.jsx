function Greetings({ lang, children }) {
  return (
    <article class="greeting">
      <h3>
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
      </h3>
    </article>
  );
}

export default Greetings;
