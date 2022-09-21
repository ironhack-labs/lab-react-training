function Greetings({ lang, children }) {
  let speak = '';
  if (lang === 'de') {
    speak = 'Hallo';
  } else if (lang === 'en') {
    speak = 'Hi';
  } else if (lang === 'es') {
    speak = 'Hola';
  } else if (lang === 'fr') {
    speak = 'Bonjour';
  }
  return (
    <div>
      {speak} {children}
    </div>
  );
}

export default Greetings;
