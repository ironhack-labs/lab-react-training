import './Greetings.css';

const Greetings = (props) => {
  let greet = 'Hello';
  switch (props.lang) {
    case 'de':
      greet = 'Hallo';
      break;
    case 'es':
      greet = 'Hola';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
    default:
  }
  return <div className="Greetings">{`${greet} ${props.children}`}</div>;
};

export default Greetings;
