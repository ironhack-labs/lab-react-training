import './Greetings.css';

function Greetings(props) {
  const { lang, children } = props;

  return (
    <div className="greetings">
      {lang === 'de' && `Hallo ${children}`}
      {lang === 'en' && `Hello ${children}`}
      {lang === 'es' && `Hola ${children}`}
      {lang === 'fr' && `Bonjour ${children}`}
      {!['de', 'en', 'es', 'fr'].includes(lang) && `Hello ${children}`} {/* Default greeting */}
    </div>
  );
}

export default Greetings;