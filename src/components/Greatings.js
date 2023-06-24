export default function Greetings({ lang, greetings }) {
  let greetings;
  switch (lang) {
    case 'de':
      greeting = 'Guten Tag';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Ola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'καλημέρα';
  }

  return (
    <div className="box-with-text">
      <p>
        {greetings}
        {children}
      </p>
    </div>
  );
}
