import '../App.css';

function Greetings(props) {
  let language = props.lang;
  let children = props.children;
  let greeting = '';
  if (language === 'de') {
    greeting = 'Hallo';
  } else if (language === 'fr') {
    greeting = 'Bonjour';
  } else if (language === 'es') {
    greeting = 'Hola';
  } else if (language === 'en') {
    greeting = 'Hello';
  }

  return (
    <div className="language">
      <p>
        {greeting} {children}
      </p>
    </div>
  );
}

export default Greetings;
