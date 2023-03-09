function Greetings(props) {
  const { children, lang } = props;
  return (
    <div className="card">
      {lang === 'de' && <p>Hello {children} </p>}
      {lang === 'fr' && <p>Hello {children} </p>}
      {lang === 'es' && <p>Hola {children} </p>}
      {lang === 'en' && <p>Bonjour {children} </p>}
    </div>
  );
}
export default Greetings;
