function Greetings(props) {
    const lang = props.lang;

    let greeting;
    switch (lang) {
      case 'de':
        greeting = 'Hallo';
        break;
      case 'es':
        greeting = 'Hola';
        break;
      case 'en':
        greeting = 'Hello';
        break;
      case 'fr':
        greeting = 'Bonjour';
        break;
    }


    return (
      <p className="container">
        {greeting} {props.children}
      </p>
    );
}

export default Greetings;