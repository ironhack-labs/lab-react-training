function Greetings(props) {
  const { lang, children } = props;
  return (
    <div className="card">
      {lang === 'de' && <p>Hallo {children}</p>}
      {lang === 'fr' && <p>Bonjour {children}</p>}
      {lang === 'es' && <p>Hola {children}</p>}
      {lang === 'en' && <p>Hello {children}</p>}
    </div>
  );
}

export default Greetings;
