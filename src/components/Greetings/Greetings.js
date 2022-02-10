import Box from '../Box/Box';


function Greetings({ className, lang, children }) {

    let greet;
    switch (lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'es':
            greet = 'Hola';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        case 'en':
        default:
            greet = 'Hello';
            break;
    }

    return (
      
            <Box className={`m-0 fw-light ${className}`}>{greet} {children}</Box>
      
    )




    // if (lang === 'de') {
    //     return <small className='lang'>Hallo {children}

    //     </small>
    // }
    // if (lang === 'en') {
    //     return <small className='lang'>Hello {children}

    //     </small>
    // }if (lang === 'es') {
    //     return <small className='lang'>Hola {children}

    //     </small>
    // }if (lang === 'fr') {
    //     return <small className='lang'>bonjour {children}

    //     </small>
    // }


    // switch (lang){

    //     case 'de':
    //         return <h1 className='lang '>Hallo {children}</h1>;
    //         break;

    //     case 'en':
    //         return <h1 className='lang '>Hello {children}</h1>;
    //         break;

    //     case 'es':
    //         return <h1 className='lang '>Hola {children}</h1>;
    //         break;

    //         case 'fr':
    //         return <h1 className='lang '>Bonjour {children}</h1>;
    //         break;


    // }




}







export default Greetings