import './Greetings.css';

function Greeting({ lang, children }) {
  
  let greeting;
  
  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
  }
  
  return (
    <div className="greetings">{greeting} {children}</div>
  )
}

Greeting.defaultProps = {
  lang: '',
  children: ''
}

export default Greeting;