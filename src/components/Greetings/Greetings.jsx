

function Greetings({lang ,children}){
 let text = " "
switch (lang) {
    case "es":
        text = `hola ${children}`;
        break; 

    case "en":
        text = `hello ${children}`;
        break;

    case "fr":
        text = `Bonjour  ${children}`;
        break;

    case "de":
        text = `Hallo  ${children}`
        break;

    default: text = " "
        break;
}


    return (
        <div><p>{text}</p></div>
    )
}
 export default Greetings