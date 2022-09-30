function Greetings({ lang, children }) {
  let speak = '';
  if (lang === 'de') {
    return (
      <div className="Greetings">
        {speak}
        {children}
      </div>
    );
    //speak = 'Hallo';
  } else if (lang === 'fr') {
    return (
      <div className="Greetings">
        {speak}
        {children}
      </div>
    );
    //speak = 'Bonjour';
  }
}
export default Greetings;
