
function Greetings (props) {

  const greet = {
    de: 'Hallo',
    fr: 'Bonjour',
    es: 'Hola'
  }
  
return(
  <div className="Greetings">
  <h3>{greet[props.lang]} {props.children}</h3>
  </div>
)
   
}

export default Greetings