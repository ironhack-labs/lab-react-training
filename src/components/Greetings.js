export function Greetings({lang, children}){
    let greeting;
    switch(lang){
        case 'de':
            greeting = `Hallo ${children}`
        break;
        case 'en':
            greeting = `Hello ${children}`
        break;
        case 'es':
            greeting = `¡Hola, ${children}`
        break;
        case 'fr':
            greeting = `Bonjour ${children}`
        break;
    }
    return (
     <div className="border border-dark p-1 text-start">
         <p> {greeting}</p>
     </div>
    );
}