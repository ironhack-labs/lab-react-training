function Greetings(props) {
  switch (props.lang) {
    case 'en':
      return (
        <div className="greeting-container">
          <h4>Hello {props.children}</h4>
        </div>
      );
    case 'de':
      return (
        <div className="greeting-container">
          <h2>Hallo {props.children}</h2>
        </div>
      );
    case 'es':
      return (
        <div className="greeting-container">
          <h2>Hola {props.children}</h2>
        </div>
      );
    case 'fr':
      return (
        <div className="greeting-container">
          <h2>Bonjour {props.children}</h2>
        </div>
      );
    default:
      return (
        <div className="greeting-container">
          <h2>Hello {props.children}</h2>
        </div>
      );
  }
}

export default Greetings;
