const Greetings = (props) => {
    let greet = '';
    switch (props.lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        case 'en':
            greet = 'Hello';
            break;
        case 'es':
            greet = 'Hola';
            break;
        default:
            greet = 'Olá';
    }

    return (

        <p>{`${greet} ${props.children}`}</p>

    );
};


export default Greetings