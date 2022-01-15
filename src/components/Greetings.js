import classes from './Greetings.module.css';

const Greetings = (props) => {
  let greeting = '';
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hi';
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
    <div className={classes.greeting}>
      <p>{greeting}</p>
      {props.children}
    </div>
  );
};

export default Greetings;
