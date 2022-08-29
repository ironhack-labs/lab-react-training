import './Greetings.css';

function Greetings({ lang, children, className }) {

  const cheers = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  }

  return (
    <div className="greetings">
      <div className="container">
        <div className={`message text-start ${className}`}>
          <span>{cheers[lang]} {children}</span>
        </div>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  className: ''
}

export default Greetings;