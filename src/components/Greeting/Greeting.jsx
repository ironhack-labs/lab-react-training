import './Greeting.css';

const Greeting = ({ lang, children }) => { // En una constante no puedo hacer un if else, uso ternarios o uso una function normal.
  const sayHi = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'language not founded';
    }
  };

  return (
    <div className="Greeting-container">
      <p>
        {sayHi()} { children }
      </p>
    </div>
  );
};

export default Greeting;
