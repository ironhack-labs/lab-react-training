import './Greetings.css'

const Greetings = (props) => {
    // console.log(props);

    let greeting
    switch (props.lang) {
        case 'en':
            greeting = 'Hello'
            break;
        case 'de':
            greeting = 'Hallo'
            break;
        case 'es':
            greeting = 'Hola'
            break;

        case 'fr':
            greeting = 'Bonjour'
            break;

        default: greeting = '👋'
    }

    return (
        <>
            <p className='idGreeting'>
                {greeting} {props.children}
            </p>
        </>
    )
}

export default Greetings;
