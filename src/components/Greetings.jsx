
function Greetings(props) {
  return (
    <div>
        <p>
            {props.lang === "de" && "Hallo "}
            {props.lang === "en" && "Hello "}
            {props.lang === "es" && "Hola "}
            {props.lang === "fr" && "Bonjour "}
            {props.children}
        </p>
       
    
    </div>
  )
}

export default Greetings;