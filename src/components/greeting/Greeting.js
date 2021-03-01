
function Greeting({lang, children, className}) {
    let greet;
    switch (lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'en':
            greet = 'Hello';
            break;
        case 'es':
            greet = 'Hola';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        default:
            greet = 'Hello'
    };
            
    return (  
        <h5 className={className}>{greet} {children}</h5>
    );
}

export default Greeting;