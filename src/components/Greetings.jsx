function Greetings(props) {
    const helloText = props.lang === 'fr' ? 'Bonjour' : props.lang === 'de' ? 'Hallo' : props.lang === 'es' ? 'Hola' : 'Hello'
    return (
        <div className="greeting">
            <p>{helloText} {props.children}</p>
        </div>
    )
  }
   
  export default Greetings;