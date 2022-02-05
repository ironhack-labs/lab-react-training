import './greetings.css';

function Greetings({lang, children}) {
    let greet;
    switch(lang) {
        case 'de':
            greet = 'Hallo'
            break 
        case 'fr':
            greet = 'Bonjour'
            break
        case 'en':
            greet = 'Hello'
            break
        case 'es':
            greet = 'Hola'
            break
        default:
            greet = 'Hello'
    }
    return(
        <div className='greetings-frase'>
            {greet} {children}
        </div>
    )
}

export default Greetings