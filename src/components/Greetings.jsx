export default function Greetings({ lang, children }) {
  return (
    <div className="Greetings">
      {lang === 'fr' && 'Bonjour '}
      {lang === 'en' && 'Hello '}
      {lang === 'de' && 'Hallo '}
      {lang === 'es' && 'Hola '}
      {children}
    </div>
  );
}
