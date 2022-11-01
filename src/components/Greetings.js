function Greetings(props) {
    console.log(props)
    let greeting = "";
    if (props.lang === "de") greeting = "Hallo";
    if (props.lang === "en") greeting = "Hello";
    if (props.lang === "es") greeting = "Hola";
    if (props.lang === "fr") greeting = "Bonjour";    
  return (
    <div className="greeting">{greeting} {props.children}</div>
  )
}

export default Greetings