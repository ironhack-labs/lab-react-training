import "./Greeting.css"

function Greetings({ lang, children }) {
  let greeting = ""
  switch (lang) {
    case "eng":
      greeting = "Hello";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "es":
      greeting = "Hola";
    break;
    default :
      greeting = "Hallo"
  }
  return(
    <div className="greeting-card d-flex mx-4">
      <h3>{greeting} {children}</h3>
    </div>
  )
}

export default Greetings