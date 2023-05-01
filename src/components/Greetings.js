function Greetings(props) {
    const greetings = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour',
    };
    
    return (
      <div>
        <p>{greetings[props.lang]} {props.children}</p>
      </div>
    );
  }
  
  export default Greetings;
  