function Greetings({ lang, children }) {
  let greeting = '';
  if (lang === 'de') {
    greeting = 'Hallo';
  } else {
    greeting = 'Bonjour';
  }

  return (
    <div className="Greeting">
      <p>
        {greeting}, {children}
      </p>
    </div>
  );
}

export default Greetings;
