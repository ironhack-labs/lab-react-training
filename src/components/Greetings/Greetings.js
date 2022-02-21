import './Greetings.css';

function Greetings(props) {
  let greeting = '';

  if (props.lang === 'de') {
    greeting = 'Hallo';
  } else if (props.lang === 'en') {
    greeting = 'Hello';
  } else if (props.lang === 'es') {
    greeting = 'Hola';
  } else if (props.lang === 'fr') {
    greeting = 'Bonjour';
  }

  return (
    <div className="greetingDiv">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
