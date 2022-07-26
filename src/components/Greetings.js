function Greetings(params) {
  let correctGreeting;
  switch (params.lang) {
    case "de":
        correctGreeting = "Hallo";
      break;  
    case "en":
        correctGreeting = "Hello";
      break;  
    case "es":
        correctGreeting = "Hola";
      break;  
    case "fr":
        correctGreeting = "Bonjour";
      break;  
    default:
        correctGreeting = "Hello";    
      break;
  }
  return (
    <div className="border">
      <p>{correctGreeting} {params.children}</p>
    </div>
  );
}

export default Greetings;
