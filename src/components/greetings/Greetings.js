function Greetings({ lang, children }) {
  let language = 'Hello';
  switch (lang) {
    case 'ptbr':
      language = 'Coé';
      break;
    case 'en':
      language = 'do you have oil?';
      break;
    case 'es':
      language = 'no puedo estoy gordito y cansadito';
      break;
    case 'fr':
      language = 'Torre Eiffel';
      break;
    default:
      language = 'Eai Padrinho';
      break;
  }
  return(
    <div className=" language border-dark mb-2">
        <h3>{language} {children}</h3>
    </div>
  );
};

export default Greetings;
