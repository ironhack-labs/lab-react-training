import "./index.css"

function Greetings({ lang, children }) {

  if (lang === 'de') {
    lang = 'Hallo';
  } else if (lang === 'en') {
    lang = 'Hello';
  } else if (lang === 'es') {
    lang = 'Hola';
  } else if (lang === 'fr') {
    lang = 'Bonjour';
  }

  return (
    <div className="Greetings">
      <p>
        {lang} {children}
      </p>
    </div>
  );
}

export default Greetings;
