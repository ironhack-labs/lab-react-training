const Greetings = (props) => {
    return (
      <div className="cardProfile">
        {props.lang === 'de' && <span>Hallo {props.children}</span>}
        {props.lang === 'fr' && <span>Bonjour {props.children}</span>}
        {props.lang === 'en' && <span>Hello {props.children}</span>}    
        {props.lang === 'es' && <span>Hola {props.children}</span>}
      </div>
    );
  };
  
  export default Greetings;