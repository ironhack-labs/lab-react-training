function Greetings(props) {
    let xxx
    switch (props.lang) {
      case 'es':
        xxx = 'Hola '
        break
      case 'fr':
        xxx = 'Bonjour '
        break
      case 'it':
        xxx = 'Ciao'
        break
      case 'eng':
        xxx = 'Hello'
        break
      default:
    }
  
    return (
      <p style={{border:"1px solid Black", width: "300px"}}> {xxx} {props.children} </p>
    )
  }
  
  export default Greetings;