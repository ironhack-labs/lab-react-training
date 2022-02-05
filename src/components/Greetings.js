import './Greetings.css'

function Greetings(props) {

    const { lang, children } = props




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

    
    switch (lang){
        case 'de':
            return <small className='lang '>Hallo {children}</small>;
            break;

        case 'en':
            return <small className='lang '>Hello {children}</small>;
            break;

        case 'es':
            return <small className='lang '>Hola {children}</small>;
            break;
        
            case 'fr':
            return <small className='lang '>Bonjour {children}</small>;
            break;


    }




}







export default Greetings