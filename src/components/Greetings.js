function Greetings ({children, lang}) {
    switch(lang){
        case "de":
            lang = "Hallo";
            break;
        case "en":
            lang =  "Hello";
            break;
        case "es":
            lang = "Hola";
            break;
        case "fr":
            lang =  "Bonjour";
            break;
        default:
            lang = "Hi"
    }

    return ( 
        <div className="box">
            {lang} {children}
        </div>
    )
}

export default Greetings