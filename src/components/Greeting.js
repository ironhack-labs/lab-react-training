export default function Greeting({ lang, children }) {
  return (
    <h3 className="boxed-border">
      {lang === 'de' ? 'Hallo' : lang === 'fr' ? 'Bonjour' : 'Hello'} {children}
    </h3>
  );
}
