import './Greetings.css'

function Greetings ({lang, children}) {
  
  let greet = ''
  switch (lang){
    case 'de': 
        greet = 'Hallo' 
        break;

    case 'fr':
      greet = 'Bonjour';
      break;

    case 'en':
        greet = 'Hello';
        break;
    
    default:
        greet='Hola'
        break;
  }

  return (
    <div className="id-card-box d-flex border border-dark  my-2">{/**/}
      <p className='m-2'>{greet} {children}!!</p>
    </div>
  )
}

export default Greetings