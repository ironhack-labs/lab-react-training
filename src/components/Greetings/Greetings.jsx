import './Greetings.css';

function Greetings({ lang, children }) {

    // console.log("LANG:",lang);
    let greeting = '';
    switch (lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'es':
            greeting = 'Hola';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        default:
            greeting = 'Hello';
            break;
    }
    return (
        <>
            <div className="greetings">
                {greeting} {children}
            </div>
        </>
    )
}

export default Greetings;