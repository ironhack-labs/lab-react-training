function Greetings(props) {
  let greeting = '';
  switch (props.lang) {
    case 'en':
      greeting = 'Hello';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'bonjour';
      break;
    case 'es':
      greeting = 'hola';
      break;
    default:
      greeting = 'Hello';
      break;
  }
       return (
         <div>
           <h2>{props.lang} {greeting}</h2>
         </div>
       );
}

export default Greetings
