

function Greetings({ lang, children }) {

    let greeting = 'Hello';

    switch (lang) {
        case "de":
            greeting = 'Hallo';
            break;
        case "en":
            greeting = 'Hello';
            break;
        case "es":
            greeting = 'Hola';
            break;
        case "fr":
            greeting = 'Bonjour';
            break;
        default:
            greeting = 'Hello';
            break;
    }

    return (
        <div className="card max-card-width" >
            <div className="card-body">
                <h5 className="card-title">{greeting} {children}</h5>
            </div>
        </div>
    );
}

export default Greetings;