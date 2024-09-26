function Greeting(props) {
const { lang, children } = props
  return (
    <div className="greeting-card">
      {lang === 'de' && <p>Hallo {children}</p>}
      {lang === 'en' && <p>Hello {children}</p>}
      {lang === 'es' && <p>Hola {children}</p>}
      {lang === 'fr' && <p>Bonjour {children}</p>}
    </div>
  );



}

export default Greeting;
