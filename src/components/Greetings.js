function Greetings({ lang, children }) {
  return (
    <div className="greetings">
      {lang === 'de' ? 'Hallo' : 'Bonjour'} {children}
    </div>
  );
}

export default Greetings;
