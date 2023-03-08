import './Greeting.css'

function Greeting({ lang, children }) {
    let greeting = '';
    
    switch (lang) {
        case 'en':
            greeting = 'Hello'
            break;
        case 'de':
            greeting = 'Halo'
            break;
        case 'fr':
            greeting = 'Bonjour'
            break;
        case 'es':
            greeting = 'Hola'
            break;
        default:
            greeting = 'Oi'
            break;
    }

    
    return ( 
        <div className='Greeting-container'>
            <h6> { greeting }, { children } </h6>
        </div>
     );
}

export default Greeting;