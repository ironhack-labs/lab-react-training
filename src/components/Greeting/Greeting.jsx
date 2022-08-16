function Greetings(props) {
    let { lang, children } = props;
  
    switch (lang) {
      case 'de':
        lang = 'Hallo';
        break;
      case 'en':
        lang = 'Hello';
        break;
      case 'es':
        lang = 'Hola';
        break;
      case 'fr':
        lang = 'Bonjour';
        break;
      default:
        return 'Bună Dimineața! Ce mai faci, frate?';
    }
  
    return (
      <div>
        <p>
          {lang} {children}
        </p>
      </div>
    );
  }
  
  export default Greetings;
  
  
  
  
  
  
  
  
  
  