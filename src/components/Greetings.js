function Greetings(props) {
    let greeting = '';
  
    switch (props.lang) {
      case 'de':
        greeting = 'Halo';
        break;
      case 'es':
        greeting = 'Saludos';
        break;
      case 'en':
        greeting = 'Hi';
        break;
      case 'fr':
        greeting = 'Bonjour';
        break;
      default:
        greeting = '';
    }
  
    return (
      <div className="Border">
        {greeting && <p>{greeting} {props.children}</p>}
      </div>
    );
  }
  export default Greetings;
