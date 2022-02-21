
const Greetings = ({ lang, children }) => {  
  let greet=''
  switch (lang) {
    case 'de':
      greet = 'Hallo'
      break;
    case 'en':
      greet = 'Hello'
      break;
    case 'es':
      greet = 'Hola'
      break;
    case 'fr':
      greet = 'Bonjour'
      break;
    default:
      break;
  }

    return(
        <article className="box">
          <p>{greet} {children}</p>
        </article>

    )
    
}

export default Greetings
