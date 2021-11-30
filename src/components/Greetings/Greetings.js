import "./Greetings.css"
const Greetings = (props) => {
  const getGreetings = (language) => {
    switch (language) {
      case 'en':
        return 'Hello';
      case 'fr':
        return 'Bonjour';
      case 'de':
        return 'Halo';
      case 'es':
        return 'Hola';
      default:
        return 'Salve';
    }
  };
  return (
    <div className="Greetings">
      <div className="greetings-container">
        {getGreetings(props.lang)} {props.children}
      </div>
    </div>
  );
};

export default Greetings;
