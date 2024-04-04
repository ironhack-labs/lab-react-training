
import './Greetings.css'

function Greetings(props) {

const {lang, children} = props
let greeting = '';

switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
  }

  return (
    <div className='greeting'>
      <p>{greeting}, {props.children}</p>
    </div>
  )
}

export default Greetings