import './Greeting.css';

function Greetings ({ lang, children }) {
  const speak = {
    en: 'Hello',
    es: 'Hola',
    de: 'Halo',
    fr: 'Bonjour',
  };

  return (
    <div className="Greetings">
      <h3>
        {speak[lang]} {children}
      </h3>
    </div>
  );
}

export default Greetings;

