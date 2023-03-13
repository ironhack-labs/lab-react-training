

function Greetings({ lang, children }) {
  switch (lang) {
    case "de": 
      lang = "Hallo";
      break;
    case "en": 
      lang = "Hello";
      break;
    case "es": 
      lang = "Hola";
      break;
    case "fr": 
      lang = "Bonjour";
      break;
      default:
      lang = 'Hello'

  }
  return (
     <div className="mb-3 border border-1 border-dark m-3">
        <p className="m-2">{lang} {children}</p>
     </div>
  )
};


Greetings.defaultProps = {
  lang: '',
  children: ''
};

export default Greetings