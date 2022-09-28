function Greetings({ lang, children }) {
  let speak = '';
  if (lang === 'de') {
    speak = 'Hallo';
  } else if (lang === 'fr') {
    speak = 'Bonjour';
  }
  return (
    <div style={{ border: 'solid' }}>
      {speak}
      {children}
    </div>
  );
}

export default Greetings;
