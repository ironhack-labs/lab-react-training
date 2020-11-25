export default function Greetings({ lang, children }) {
    let greeting;
    switch (lang) {
        case 'de':
            greeting = `hallo`
            break;
        case 'en':
            greeting = `Hello`
            break;
        case 'es':
            greeting = `Hola`
            break;
        case 'fr':
            greeting = `Bonjour`
            break;
        default:
            break;
    }
    return <div style={{ border:'2px solid black'}}>

    <h2>{greeting} {children}</h2>    
    </div>
}