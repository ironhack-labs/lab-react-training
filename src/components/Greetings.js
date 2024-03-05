export const Greetings = ({ lang, children }) => {
  let greeting;

  switch (lang) {
    case 'de':
      greeting = `Hallo ${children}!`;
      break;
    case 'en':
      greeting = `Hello ${children}!`;
      break;
    case 'es':
      greeting = `¡Hola ${children}!`;
      break;
    case 'fr':
      greeting = `Bonjour ${children}!`;
      break;
    default:
      greeting = `Hello ${children}!`;
      break;
  }
  return (
    <>
      <div className="greetings">{greeting}</div>
    </>
  );
};

export default Greetings;
