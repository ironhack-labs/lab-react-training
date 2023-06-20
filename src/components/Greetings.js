export default function Greetings({lang, children}) {
    let greeting;
    switch(lang) {
        case "de":
            greeting = "Guten Tag";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "es":
            greeting = "Ola";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        default:            
            greeting = "xxx";
    }

    return (
        <div className="box-with-text">
            <p>{greeting} {children}</p>
        </div>
    )
}