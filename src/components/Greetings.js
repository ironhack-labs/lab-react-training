
// Iteration 2 | Component: Greetings
function Greetings(props) {
    const {lang, children} = props
    let greetings = '';
    switch(lang) {
        case 'de' :
            greetings = 'Hallo'
            break;
        case 'fr':
            greetings = 'Bonjour'
            break;
        case 'es' :
            greetings =  'Hola'
            break;
        case 'en' :
            greetings = 'Hello'
            break;
        default:
            greetings = ''
            break;
    }
  return (
    <div className='greetings'>
      <p>{greetings} {children}!</p>
    </div>
  );
}

export default Greetings;
