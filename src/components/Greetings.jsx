function Greetings(props) {
  return (
    <h2>
      {props.lang === 'de'
        ? 'Guten Tag'
        : props.lang === 'en'
        ? 'Oh, hi'
        : props.lang === 'es'
        ? 'Olà'
        : props.lang === 'fr'
        ? 'Bonjour'
        : 'Bonan tagon'}
      , {props.children}
    </h2>
  );
}

export default Greetings;
