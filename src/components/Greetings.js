import './Greetings.css';

function Greetings(params) {
  let greeting;
  switch (params.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
      break;
  }
  return (
    <div className="greetings">
      <p>
        {greeting} {params.children}
      </p>
    </div>
  );
}

export default Greetings;
