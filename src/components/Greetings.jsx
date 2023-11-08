import '../assets/styles/greetings.css';

function Greetings(props) {
  let hi;

  switch (props.lang) {
    case 'fr':
      hi = 'Bonjour';
      break;
    case 'en':
      hi = 'Hello';
      break;
    case 'es':
      hi = 'Hola';
      break;
    default:
      hi = 'Hallo';
      break;
  }

  return (
    <div className="greetings">
      {hi} {props.children}
    </div>
  );
}

export default Greetings;
