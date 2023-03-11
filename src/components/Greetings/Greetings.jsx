import './Greetings.css';

const langConfig = {
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
  fr: 'Bonjour',
}

const Greetings = ({ lang, children }) => {
  
  return (
    <div className="Greetings">
      {langConfig[lang]} {children}
    </div>
  )
}

export default Greetings