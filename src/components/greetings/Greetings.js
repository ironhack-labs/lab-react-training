import Panel from '../panel/Panel';

function Greetings({ lang, className, children }) {
  let greet;
  switch (lang) {
    case 'en': 
      greet = 'Hello';
      break;
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
    <Panel className={className}>{greet} {children}</Panel>
  )
}

export default Greetings;
