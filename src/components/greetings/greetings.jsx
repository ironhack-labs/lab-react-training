function Greetings({ lang, children }) {
    let greetingText = '';
  
    switch (lang) {
      case 'de':
        greetingText = `Hallo, ${children}!`;
        break;
      case 'en':
        greetingText = `Hello, ${children}!`;
        break;
      case 'es':
        greetingText = `¡Hola, ${children}!`;
        break;
      case 'fr':
        greetingText = `Bonjour, ${children}!`;
        break;
      default:
        greetingText = `Hello, ${children}!`;
    }
  
    return <div>
        <h1>{greetingText}</h1>
        </div>;
  }
  
  export default Greetings;