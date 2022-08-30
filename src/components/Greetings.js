import './Greetings.css'
const Greentings = (props) => {
  function greeting(language) {
    switch (language) {
      case 'de':
        return 'Hallo ';
      case 'en':
        return 'Hello ';
      case 'es':
        return 'Hola ';
      case 'fr':
        return 'Bonjour ';
      default:
        return 'no inserido a language';
    }
  }
  return (
    <div className="Greeting">
      <p>
        {greeting(props.lang)}
        {props.children}
      </p>
    </div>
  );
};
export default Greentings;
