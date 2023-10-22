/* eslint-disable react/prop-types */
function Greetings({lang, children}) {
    let greeting = "";
    switch (lang) {
        case "de":
            greeting = `Hallo, ${children}!`;
            break;
        case "es":
            greeting = `Hola, ${children}!`;
            break;
        case "fr":
            greeting = `Bonjour,${children}`;
        break;
        default:
            greeting = `Hello,${children}`;
    }
    return <div>{greeting}</div>
}
export default Greetings;
