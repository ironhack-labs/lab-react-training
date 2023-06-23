function Greetings(props) {
 const{lang, children}= props
    console.log(props)
  
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
  
    return <p className="greeting">{greetingText}</p>;
  
}

export default Greetings;