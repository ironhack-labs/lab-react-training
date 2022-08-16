function Greetings(props) {

    const {lang, children} = props;

    const checkLanguage = (lang) => {
        if (lang === 'de') {
          return <span>Hallo {children}</span>;
        } else if (lang === 'en') {
          return <span>Hello {children}</span>;
        } else if (lang === 'es') {
          return <span>Hola {children}</span>;
        } else if (lang === 'fr') {
            return <span>Bonjour {children}</span>;
      };
    }
    
  return (
    <div className="idCard">
        {checkLanguage(lang)}
    </div>
  )
}

export default Greetings