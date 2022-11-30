import styles from './Greetings.module.css';

const Greetings = ({ lang, children }) => {
  let greeting = '';
  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hola';
      break;
  }
  return (
    <div className={styles.greeting}>
      <p>
        <span>{greeting}</span> {children}
      </p>
    </div>
  );
};

export default Greetings;
