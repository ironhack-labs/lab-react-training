function Greetings({ lang, children }) {
    let greet;
    switch (lang) {
        case 'es':
          greet = 'Hola';
          break;
        case 'fr':
          greet = 'Bonjour';
          break;
        case 'de':
          greet = 'Hallo';
          break;
        default:
          greet = 'Hello';
      }
    return (
        <div>
            <h1>{greet} {children}</h1>
        </div>
    )
}

export default Greetings