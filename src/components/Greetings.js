function Greetings(props) {
    const { lang, children } = props;


    const divStyle = {
      display: "flex",
      border: "1px solid black",
      alignItems: "center",
      margin: 10
  }
  
    let greeting;
    switch (lang) {
      case "en":
        greeting = "Hello";
        break;
      case "es":
        greeting = "Hola";
        break;
      case "fr":
        greeting = "Bonjour";
        break;
      case "de":
        greeting = "Hallo";
        break;
      default:
        greeting = "Hello";
        break;
    }
  
    return (
    <div style={divStyle}>

    <p>{greeting} {children}</p>
    </div>
    
    );
  }
  
  export default Greetings;