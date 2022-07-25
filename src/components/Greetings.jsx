const Greetings = (props) => {
  let greet = '';
  if(props.lang === 'de'){greet = 'Halo'} 
  else if (props.lang === 'fr'){greet = 'Bonjour'} 
  else if (props.lang === 'es'){greet = 'Hola'} 
  else if (props.lang === 'en'){greet = 'Hello'}

  return (
    <div className="container">
      <p> {greet} {props.children} </p>
    </div>
  ) 
}

export default Greetings;